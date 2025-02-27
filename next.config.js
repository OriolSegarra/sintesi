const nextConfig = {
  images: {
    domains: [
      "v0.blob.com", 
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "s3.us-west-2.amazonaws.com",
      "www.notion.so",
      "images.unsplash.com",
      "secure.notion-static.com",
      "notion-api.splitbee.io",
      "notion.so",
      "amazonaws.com",
      "s3-us-west-2.amazonaws.com"
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '**.notion.so',
      }
    ]
  },
}

module.exports = nextConfig

