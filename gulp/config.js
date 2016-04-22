var dest = './dist';
var src = './src';
var gutil = require('gulp-util');
var history = require('connect-history-api-fallback');

module.exports = {
  server: {
    settings: {
      root: dest,
      host: '0.0.0.0',
      port: 8080,
      livereload: {
        port: 35929
      },
      middleware: function(connect, opt) {
        return [ history({}) ];
      }
    }
  },
  sass: {
    src: src + '/styles/**/*.{sass,scss,css}',
    dest: dest + '/styles',
    settings: {
      indentedSyntax: false, // Enable .sass syntax?
      imagePath: '/images' // Used by the image-url helper
    }
  },
  vendorSass: {
    src: src + '/vendorStyles/**/*.{sass,scss,css}',
    dest: dest + '/styles',
    settings: {
      indentedSyntax: false, // Enable .sass syntax?
      imagePath: '/images' // Used by the image-url helper
    }
  },
  browserify: {
    settings: {
      transform: ['babelify', 'reactify']
    },
    src: src + '/js/index.jsx',
    dest: dest + '/js',
    outputName: 'index.js',
    debug: gutil.env.type === 'dev'
  },
  html: {
    src: 'src/index.html',
    dest: dest
  },
  watch: {
    src: 'src/**/*.*',
    tasks: ['build']
  }
};
