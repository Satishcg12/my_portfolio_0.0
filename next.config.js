/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa:{
    disable: process.env.NODE_ENV === 'development',
    dest:'public',
    register:true,
    skipWaiting : true,

  }
})

module.exports = nextConfig
