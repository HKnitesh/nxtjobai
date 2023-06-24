/** @type {import('next').NextConfig} */

const nextConfig = {
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/drw8eqw3i/image/upload/**',
            },
        ],
        output: 'export',
    },
}

module.exports = nextConfig
