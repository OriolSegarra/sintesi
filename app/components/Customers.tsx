import Image from "next/image"

const clients = [
  {
    name: "Bakery Group",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-dTLd9XrqYekfoMyhmJyO7mcqFmxdxg.png",
    width: 160,
    height: 45,
  },
  {
    name: "ProFinda",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-profinda-dHpAS6kVv04mLIoXhgPwmJYXo0cSTg.png",
    width: 200,
    height: 50,
  },
  {
    name: "Bumerang",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BG_Simbol-Logotip_positiu-oWSmLvQ0fMBILFcE6faRpShZAHYUrA.png",
    width: 200,
    height: 50,
  },
]

export default function Customers() {
  return (
    <section className="py-24 px-4 bg-[#1E2024]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Customers we love</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-4xl mx-auto">
          {clients.map((client, i) => (
            <div key={i} className="flex items-center justify-center w-full md:w-1/3">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} Logo`}
                width={client.width}
                height={client.height}
                className="opacity-80 hover:opacity-100 transition-opacity filter-[brightness(0)_invert(0.8)]"
                style={{
                  filter: "brightness(0) invert(0.8)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

