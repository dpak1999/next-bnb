/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
