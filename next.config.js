

const withPwa = require('next-pwa')

module.exports = withPwa({
  pwa:{
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  // reactStrictMode: true,
  // swcMinify: true,
})
