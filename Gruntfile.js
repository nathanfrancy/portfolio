module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            my_target: {
                files: {
                    // Compile bootstrap 
                    'assets/vendor/bootstrap/js/bootstrap.min.js': 'assets/vendor/bootstrap/js/bootstrap.js'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};