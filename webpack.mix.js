let mix = require('laravel-mix');
const fs = require('fs-extra');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('assets')
    .js('_resources/js/app.js', 'js/')
    .sass('_resources/scss/app.scss', 'css/')
    .browserSync({
        browser: 'Google Chrome',
        proxy: false,
        notify: false,
        server: {
            baseDir: "public/",
        },
        files: ['public/**/*.html', 'public/**/*.js', 'public/**/*.css']
    })
    .disableNotifications()
    .then(function () {
        fs.move('assets/mix-manifest.json', '_data/mix-manifest.json', {overwrite: true})
            .then(() => console.log('mix-manifest.json copied to _data'))
    });

mix.inProduction() ? mix.version() : mix.sourceMaps();