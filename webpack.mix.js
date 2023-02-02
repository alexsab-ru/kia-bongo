let mix = require('laravel-mix');
// require('mix-tailwindcss');
require('laravel-mix-tailwind');

mix.setPublicPath('/')
	.js('src/js/app.js', 'assets/js/app.min.js')
	.sass('src/scss/app.scss', 'assets/css/styles.min.css')
	.tailwind();



if (mix.inProduction()) {
	mix.version();
} else {
	mix.sourceMaps().webpackConfig({ devtool: 'inline-source-map' });
	mix.browserSync({
    proxy: '127.0.0.1:4000',
    notify: false,
    open: true,
    port: 3000,
    files: ['_site/**/*.html'],
  });
}

mix.disableSuccessNotifications();