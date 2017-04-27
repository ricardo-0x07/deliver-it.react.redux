"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var watchify    = require('watchify');
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify');  // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX
var sourcemaps = require('gulp-sourcemaps');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var historyApiFallback = require('connect-history-api-fallback');
var middleware = historyApiFallback();
var browserSync = require('browser-sync').create();
// var reload      = browserSync.reload;

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    images: './src/images/*',
    css: [
      		'node_modules/bootstrap/dist/css/bootstrap.min.css',
      		'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      		'node_modules/toastr/toastr.css'
    	],
    dist: './dist',
    indexJs: './src/index.js'
},
    tsx: './src/**/*.tsx',
    client: 'src/'
}

gulp.task('typescript', function() {
    return gulp.src(config.tsx)
        .pipe(sourcemaps.init())
        .pipe(plugins.typescript({
            allowJs:true,
            jsx: "react",
            module: "commonjs",
            noImplicitAny: true,
            preserveConstEnums: true,
            target: "ES5"
        }))
        .js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.client));
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('ts-lint', function() {
    return gulp.src(config.tsx)
    .pipe(plugins.tslint({
        formatter: 'prose'
    }))
    .pipe(plugins.tslint.report());
});

gulp.task('typescript-watcher', function() {
    gulp.watch([config.tsx], ['typescript']);
});

//Start a local development server
// gulp.task('connect', function() {
// 	connect.server({
// 		root: ['dist'],
// 		port: config.port,
// 		base: config.devBaseUrl,
// 		livereload: true,
// 		middleware: function (connect, opt) { return [ historyApiFallback() ]; }
// 	});
// });

function browserSyncFn() {
    browserSync.init({
      files: './dist/*.*',
      server: {
        baseDir: './dist'
    },
      notify: false,
      port: config.port
  });
}

gulp.task('open', browserSyncFn());

// gulp.task('open', ['connect'], function() {
// 	gulp.src('dist/index.html')
// 		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
// });

gulp.task('html', function() {
    gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist));
		// .pipe(reload());
});

gulp.task('js', function() {
    browserify({
        entries: config.paths.indexJs,
        cache: {},
        packageCache: {},
        plugin: [watchify],
        insertGlobals: true,
        debug: true
    })
	.transform(reactify)
	.bundle()
	.on('error', console.error.bind(console))
	.pipe(source('bundle.js'))
	.pipe(gulp.dest(config.paths.dist + '/scripts'))
	.pipe(browserSync.stream({once: true}));
});

gulp.task('css', function() {
    gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
		.pipe(browserSync.reload({stream: true}));
});

// Migrates images to dist folder
// Note that I could even optimize my images here
gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'));
        // .pipe(reload());

    //publish favicon
    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('lint', function() {
    return gulp.src(config.paths.js)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format());
});

gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch([config.tsx], ['ts-lint', 'typescript']);
    gulp.watch(config.paths.js, ['js', 'lint']);
    gulp.watch('dist/index.html').on('change', browserSync.reload);
});

// gulp.task('default', ['html', 'typescript'], ['js', 'css', 'images', 'lint', 'open', 'watch']);

gulp.task('default', function(callback) {
    runSequence(['css', 'html', 'typescript'], ['js', 'images', 'lint', 'open', 'watch'], callback);
});
