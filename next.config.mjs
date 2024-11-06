/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.googleusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',  // Add ImageKit's hostname here
            }
        ]
    }
};

export default nextConfig;
