module.exports = {
    css: {
        files: '<%= conf.path.css %>/**/*.scss',
        tasks: ['compass']
    },
    html: {
        files: 'src/**/*.html',
        tasks: ['htmlbuild']
    },
    copy: {
        files: ['<%= conf.path.images %>/**', '<%= conf.path.fonts %>/**'],
        tasks: ['copy']
    },
    options: {
        livereload: true
    }
};