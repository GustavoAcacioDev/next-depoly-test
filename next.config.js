/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'poc-next-images.s3.amazonaws.com',
                port: '',
                pathname: '/Images/**',
            },
        ],
    },
}

module.exports = nextConfig
