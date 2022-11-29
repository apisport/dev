const withPWA = require('next-pwa')({
    dest: 'public',
    // disable: process.env.NODE_ENV === 'development',
    // register: true,
    // scope: '/app',
    sw: 'service-worker.js',
    //...
    importScripts : ['/secripworker.js']
})

module.exports = withPWA({
    // next.js config
})