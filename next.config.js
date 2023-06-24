/** @type {import('next').NextConfig} */

const nextConfig = {
    trailingSlash: true,
    images: {
        output: 'export',
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
