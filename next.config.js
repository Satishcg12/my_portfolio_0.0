

const withPwa = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPwa({
  pwa:{
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching
  },
  // reactStrictMode: true,
  // swcMinify: true,
})
