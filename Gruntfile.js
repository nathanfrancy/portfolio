module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            my_target: {
                files: {
                    'assets/vendor/bootstrap/js/bootstrap.min.js': 'assets/vendor/bootstrap/js/bootstrap.js'
                }
            }
        },
        
        imagemin: { 
            dynamic: {
              files: [{
                expand: true,
                cwd: 'assets/images/projects/',
                src: ['assets/images/projects/*.{png}'],
                dest: 'assets/images/projects/min/'
              }]
            }
          }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['uglify']);
};