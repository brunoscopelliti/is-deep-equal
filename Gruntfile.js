
'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');


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
        tasks: ['eslint']
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
