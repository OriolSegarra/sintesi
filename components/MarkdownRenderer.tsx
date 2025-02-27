"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import Image from 'next/image';
import Link from 'next/link';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-invert max-w-none
      prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-headings:mt-12 prose-headings:mb-6
      prose-h1:text-4xl
      prose-h2:text-3xl
      prose-h3:text-2xl
      prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
      prose-strong:text-white prose-strong:font-medium
      prose-ol:list-decimal prose-ol:text-gray-300 prose-ol:mb-6
      prose-ul:list-disc prose-ul:text-gray-300 prose-ul:mb-6
      prose-li:mb-2
      prose-a:text-white prose-a:no-underline hover:prose-a:text-gray-300
      prose-blockquote:border-l-4 prose-blockquote:border-gray-600 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-300
      prose-code:bg-[#2A2A2A] prose-code:text-white prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm
      prose-pre:bg-[#1A1A1A] prose-pre:p-4 prose-pre:rounded-md prose-pre:overflow-x-auto prose-pre:mb-6
      prose-img:rounded-lg prose-img:mb-8
      prose-hr:my-8 prose-hr:border-gray-800
      [&>*:first-child]:mt-0"
    >
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          img: (props) => {
            const { src, alt } = props;
            if (src) {
              // Verificar si la URL es válida para Image
              if (src.startsWith('http') || src.startsWith('/')) {
                return (
                  <div className="relative h-[400px] w-full overflow-hidden rounded-lg my-8">
                    <Image 
                      src={src} 
                      alt={alt || ''} 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                );
              }
              // Fallback para imágenes que no se pueden cargar con Image
              return <img src={src} alt={alt || ''} className="rounded-lg my-8 max-w-full" />;
            }
            return <img {...props} className="rounded-lg my-8" />;
          },
          a: (props) => {
            const { href, children } = props;
            // Manejar enlaces de YouTube
            if (href && (href.includes('youtube.com') || href.includes('youtu.be'))) {
              const youtubeId = href.includes('youtube.com') 
                ? href.split('v=')[1]?.split('&')[0] 
                : href.split('youtu.be/')[1];
              
              if (youtubeId) {
                return (
                  <div className="aspect-video mb-8">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${youtubeId}`}
                      title="YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                );
              }
            }
            
            return (
              <Link 
                href={href || '#'} 
                target={href?.startsWith('http') ? "_blank" : undefined}
                rel={href?.startsWith('http') ? "noopener noreferrer" : undefined}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {children}
              </Link>
            );
          },
          table: (props) => (
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse" {...props} />
            </div>
          ),
          thead: (props) => <thead className="bg-[#2A2A2A]" {...props} />,
          th: (props) => <th className="p-3 text-left font-medium text-white border-b border-gray-800" {...props} />,
          td: (props) => <td className="p-3 text-left text-gray-300 border-b border-gray-800 bg-[#1A1A1A]" {...props} />,
          code: ({ inline, className, children, ...props }: any) => {
            if (inline) {
              return <code className="bg-[#2A2A2A] text-white px-1 py-0.5 rounded font-mono text-sm" {...props}>{children}</code>;
            }
            return (
              <pre className="bg-[#1A1A1A] p-4 rounded-md overflow-x-auto mb-6">
                <code className="text-sm font-mono text-gray-300" {...props}>{children}</code>
              </pre>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer; 