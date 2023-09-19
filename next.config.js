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
  compress: {
    level: 9,
  },
};

module.exports = nextConfig;

const withVideos = require('next-videos');

module.exports = withVideos();
