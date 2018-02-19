module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            build: {
                files: [{
                    src: 'dist/sass/*.scss',
                    dest: 'build/css/style.css'
                }]
            }
        },
        pug: {
            options: {
                pretty: true
            },
            compile: {
                files: {
                    'build/index.html': ['dist/index.pug'],
                    'build/post.html': 'dist/post.pug',
                    'build/in.html': 'dist/in1.pug'
                }
            }
        },
        watch: {
            pug: {
                files: ['dist/*.pug'],
                tasks: ['pug']
            },
            sass: {
                files: ['dist/sass/*.scss'],
                tasks: ['sass']
            },
            options: {
                livereload: 35729
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('build', ['sass', 'pug']);

}