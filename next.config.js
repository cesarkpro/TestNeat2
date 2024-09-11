const {
    createVanillaExtractPlugin
  } = require('@vanilla-extract/next-plugin');
  const withVanillaExtract = createVanillaExtractPlugin();

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    transpilePackages: ['@company/design-system']

  };
  
  module.exports = withVanillaExtract(nextConfig);