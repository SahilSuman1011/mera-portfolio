/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com", "cdn.jsdelivr.net", "www.vectorlogo.zone"],
  
  
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        },
    ],
  },
}

module.exports = nextConfig

