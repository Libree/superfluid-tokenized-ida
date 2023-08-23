/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  }
};
