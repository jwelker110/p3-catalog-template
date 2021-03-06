module.exports = {
    css: {
        files: '<%= conf.path.css %>/**/*.scss',
        tasks: ['sass']
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
    },
    js: {
        files: '<%= conf.path.javascript %>/**/*.js',
        tasks: ['concat']
    },
    fonts: {
        files: '<%= conf.path.fonts %>/*.tff',
        tasks: ['ttf2eot']
    }
};