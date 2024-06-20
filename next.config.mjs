/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            }
        ]
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|swf|avi|mov)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/media',
                    outputPath: 'static/media',
                    name: '[name].[hash].[ext]',
                    esModule: false,
                },
            },
        });

        return config;
    }
};

export default nextConfig;
