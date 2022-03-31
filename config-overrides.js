const {
  override,
  addWebpackResolve,
  addWebpackModuleRule,
  addPostcssPlugins,
} = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackResolve({
    alias: {
      pages: path.resolve(__dirname, 'src/pages/'),
      components: path.resolve(__dirname, 'src/components/'),
      context: path.resolve(__dirname, 'src/context'),
      data: path.resolve(__dirname, 'src/data'),
      helpers: path.resolve(__dirname, 'src/helpers'),

      assets: path.resolve(__dirname, 'src/assets'),
      images: path.resolve(__dirname, 'src/assets/images'),
      icons: path.resolve(__dirname, 'src/assets/images/icons'),
      sounds: path.resolve(__dirname, 'src/assets/sounds'),
    },
  }),
  addWebpackModuleRule({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }),
  addPostcssPlugins([require('tailwindcss'), require('autoprefixer')]),
)
