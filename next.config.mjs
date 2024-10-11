/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'maxstore365.s3.amazonaws.com',
                port: ''
            }
        ]
    }
};

export default nextConfig;
