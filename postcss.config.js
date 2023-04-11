module.exports = {
  plugins: [require('postcss-mixins'), require('postcss-for'), require('postcss-simple-vars'), require('postcss-extend'), require('postcss-nested'), require('postcss-atroot'), require('postcss-hexrgba'), require('postcss-preset-env'), require('autoprefixer'), require('cssnano'), require('postcss-import')]
}

// require('postcss-preset-env')({}), // Pass an empty object as options
// require('tailwindcss/nesting')(require('postcss-nesting')), // Add this line
