/** @type {import('next').NextConfig} */

const nextConfig = {
    trailingSlash: true,
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './app/image.js',
    },
}

module.exports = nextConfig
