module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/ai",
                destination: "/library/ai",
                permanent: true
            }
        ];
    },
}
