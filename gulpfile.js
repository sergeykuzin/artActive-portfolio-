'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const pug = require('gulp-pug');
const webpack = require('webpack-stream');
const browsersync = require('browser-sync');
const del = require('del');

const dist = './dist/';

gulp.task('buildHtml', () => {
  return gulp
    .src('./src/pug/pages/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(dist))
    .pipe(browsersync.stream());
});

gulp.task('buildCss', () => {
  return gulp
    .src('./src/sass/pages/*.scss')
    .pipe(sass())
    .pipe(csso({ restructure: true }))
    .pipe(gulp.dest(dist + 'css/'))
    .pipe(browsersync.stream());
});

gulp.task('clean', () => del('./dist'));

gulp.task('build-js', () => {
  return gulp
    .src('./src/js/main.js')
    .pipe(
      webpack({
        mode: 'development',
        output: {
          filename: 'main.js',
        },
        watch: false,
        devtool: 'source-map',
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        debug: true,
                        corejs: 3,
                        useBuiltIns: 'usage'
                      }
                    ]
                  ]
                }
              }
            }
          ]
        }
      })
    )
    .pipe(gulp.dest(dist + 'js/'))
    .on('end', browsersync.reload);
});

gulp.task('watch', () => {
  browsersync.init({
    server: './dist/',
    port: 4000,
    notify: true,
  });

  gulp.watch('./src/pug/**/*.pug', gulp.parallel('buildHtml'));
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('buildCss'));
  gulp.watch('./src/js/**/*.js', gulp.parallel('build-js'));
});

gulp.task('build', gulp.parallel('clean', 'buildHtml', 'buildCss', 'build-js'));

gulp.task('build-prod-js', () => {
  return gulp
    .src('./src/js/main.js')
    .pipe(
      webpack({
        mode: 'production',
        output: {
          filename: 'main.js'
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        corejs: 3,
                        useBuiltIns: 'usage'
                      }
                    ]
                  ]
                }
              }
            }
          ]
        }
      })
    )
    .pipe(gulp.dest(dist));
});

gulp.task('default', gulp.parallel('watch', 'build'));
