
'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-eslint');


  grunt.initConfig({

    connect: {
      options: {
        hostname: '127.0.0.1',
        keepalive: true,
        open: true,
        port: 8081,
        protocol: 'http'
      },
      unit: {
        options: {
          base: './tests'
        }
      },
      demo: {
        options: {
          base: './'
        }
      }
    },

    watch: {
      options: {
        livereload: 35729
      },
      js: {
        files: ['index.js'],
        tasks: ['eslint:js', 'babel:js']
      },
      tests: {
        options: {
          livereload: 35730
        },
        files: ['tests/index.js', '!tests/bundle.js'],
        tasks: ['browserify:unit']
      }
    },


    babel: {
      options: {
        sourceMap: false,
        compact: false,
        presets: ['es2015']
      },
      js: {
        files: {
          './dist/index.es5.js': './index.js'
        }
      }
    },

    browserify: {
      options: {
        debug: true
      },
      unit: {
        files: {
          'tests/bundle.js': ['tests/index.js']
        }
      }
    },

    eslint: {
      options: {
        configFile: 'eslint.json'
      },
      js: ['./index.js']
    }

  });


  grunt.registerTask('dev', ['watch']);

};
