const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')

var plugins = [ [ withSass ] ]

const adptConfig = ({})

module.exports = withPlugins( plugins, adptConfig )