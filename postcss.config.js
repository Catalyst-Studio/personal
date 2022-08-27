module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-mixins'),
        require('postcss-preset-env')({ stage: 1 }),
        require('cssnano'),
        require('autoprefixer'),
        require('postcss-discard-comments'),
        require('postcss-normalize-display-values'),
        require('pos')
    ],
}