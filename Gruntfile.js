module.exports = function(grunt) {

grunt.initConfig({

  sass: {
    dist: {
      options: {
          style: 'expanded'
      },
      files: {
          'css/style.css': 'sass/style.scss'
      }
    } 
  },

  autoprefixer: {
    no_dest: {
      src: 'css/style.css'
    }
  },

  watch: {
      styles: {
          files: ['saas/*.scss'],
          tasks: ['sass', 'autoprefixer']
      }
  }   

});

  // Loading Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass','autoprefixer', 'watch']);
  
};