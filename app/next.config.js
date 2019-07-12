const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')

var plugins = [ [ withSass ] ]

const adptConfig = ({
    distDir: '../functions/next'
})

module.exports = withPlugins( plugins, adptConfig )