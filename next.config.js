/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },
  loaders: [
    {
      test: /\.mp4$/,
      loader: 'file-loader',
    },
  ],
  compress: true,
};

module.exports = nextConfig;

const withVideos = require('next-videos');

module.exports = withVideos();
