module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    browserify:
      dev:
        options:
          debug: true
          transform: [ ]
        files:
          'app/build/scripts/index.js': [ 'app/scripts/**/*.js' ]

    connect:
      server:
        options:
          base: 'app/'
          livereload: true
          port: 8000

    handlebars:
      dev:
        files:
          'app/build/templates/templates.js': [ 'app/templates/**/*.hbs' ]
        options:
          commonjs: true

    sass:
      dist:
        options:
          sourcemap: true
        files: [
          expand: true
          cwd: 'app/stylesheets'
          src: ['**/*.scss']
          dest: 'app/build/stylesheets'
          ext: '.css'
        ]

    watch:
      reload:
        options:
          livereload: true
        files: [
          'app/index.html'
          '**/build/**'
        ]
      browserify:
        files: [ 'app/scripts/**/*.js' ]
        tasks: [ 'browserify' ]
      css:
        files: [ 'app/stylesheets/**/*.scss']
        tasks: [ 'sass' ]
      templates:
        files: ['app/templates/**/*.hbs']
        tasks: [ 'handlebars', 'browserify' ]

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask 'default',[
    'handlebars:dev'
    'browserify:dev'
    'sass:dist'
    'connect:server'
    'watch'
  ]

  return