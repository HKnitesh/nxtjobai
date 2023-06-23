/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './app/image.js',
    },
}

module.exports = nextConfig
