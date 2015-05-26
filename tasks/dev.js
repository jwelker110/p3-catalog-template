module.exports = function (grunt) {

    // clean build
    grunt.registerTask('build', ['clean:build', 'concat', 'copy', 'compass', 'htmlbuild']);

    // Default task(s).
    grunt.registerTask('dev', ['build', 'watch']);
};