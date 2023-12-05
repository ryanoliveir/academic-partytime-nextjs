/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'poltronanerd.com.br',
        pathname: '**'
      }
    ],
  }
}

module.exports = nextConfig
