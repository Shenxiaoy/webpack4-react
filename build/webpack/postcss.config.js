// module.exports = {
//   // parser: 'sugarss',
//   plugins: {
//    'postcss-import': {},
//     'postcss-preset-env': {},
//     'cssnano': {},
//   }
// }
module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers : ['last 30 versions', "> 2%", "Firefox >= 10", "ie 6-11"]
    })
  ]
}