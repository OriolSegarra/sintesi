import {Client} from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import 'server-only'

// Define los tipos para los posts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string; // Añadiremos esto en getPageMetaData
  description: string;
  category: string[]; // Cambiado de string a string[]
  tags: string[];
  date: string;
  slug: string;
}

const notion = new Client({
    auth: process.env.NOTION_API_KEY || '',
})

// Inicializar el convertidor de Notion a Markdown
const n2m = new NotionToMarkdown({ notionClient: notion });

// Añadir esta función para obtener el contenido de un post específico
export const getPostContent = async (pageId: string) => {
  try {
    // Configurar opciones para la conversión a Markdown
    n2m.setCustomTransformer('image', async (block: any) => {
      if (block.image) {
        const { image } = block;
        const imageUrl = image.type === 'external' ? image.external.url : image.file.url;
        const caption = image.caption?.length > 0 ? image.caption[0]?.plain_text : '';
        
        return `![${caption}](${imageUrl})`;
      }
      return '';
    });

    // Configurar para incluir bloques anidados
    const mdblocks = await n2m.pageToMarkdown(pageId, 2); // Profundidad de 2 niveles
    
    // Convertir los bloques a una cadena de Markdown
    const mdString = n2m.toMarkdownString(mdblocks);
    
    // Si el contenido está vacío, devolver un mensaje
    if (!mdString.parent || mdString.parent.trim() === '') {
      return `# ${pageId}\n\nNo hay contenido disponible para este post.`;
    }
    
    return mdString.parent;
  } catch (error) {
    console.error("Error fetching post content:", error);
    return "# Error\nNo se pudo cargar el contenido del post.";
  }
};

export const getAllPublished = async (): Promise<BlogPost[]> => {
    if (!process.env.NOTION_DATABASE_ID) {
        throw new Error('NOTION_DATABASE_ID is not defined');
    }

    const posts = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            property: 'status',
            select: {
                equals: 'Published',
            },
        },
        sorts: [
            {
                property: 'publish-date',
                direction: 'descending',
            },
        ],
    })
    const allPosts = posts.results
    
    return allPosts.map((post) => {
        return getPageMetaData(post);
    });
};

const getPageMetaData = (post: any): BlogPost => {
    const getTags = (tags: any[]): string[] => {
        const allTags = tags.map((tag) => {
            return tag.name;
        }); 
        return allTags;
    };

    // Extraer la descripción o usar un valor por defecto
    const description = post.properties['seo-description']?.rich_text[0]?.plain_text || '';
    
    // Usar todas las etiquetas como categorías
    const tags = getTags(post.properties['keywords']?.multi_select || []);
    
    return {
        id: post.id,
        title: post.properties['Title']?.title[0]?.plain_text || 'Untitled',
        description: description,
        excerpt: description, // Usar la descripción como extracto
        category: tags, // Ahora asignamos el array completo
        tags: tags,
        date: getToday(post.properties['publish-date']?.date?.start),
        slug: post.properties['slug']?.rich_text[0]?.plain_text || '',
    };
};

function getToday(datestring: string | undefined): string {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    let date = new Date();
  
    if (datestring) {
      date = new Date(datestring);
    }
  
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let today = `${month} ${day}, ${year}`;
  
    return today;
  };

