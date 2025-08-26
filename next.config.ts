/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for next export in Next 13+
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint warnings/errors during build
  },
}

module.exports = nextConfig;
