/** @type {import('next').NextConfig} */

const nextConfig = {
    trailingSlash: true,
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/drw8eqw3i/image/upload/**',
            },
        ],
    },
}

module.exports = nextConfig
