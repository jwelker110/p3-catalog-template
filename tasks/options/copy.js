module.exports = {
    main: {
        files: [
            {expand: true, cwd: '<%= conf.path.fonts %>/', src: ['**/*'], dest: '<%= conf.path.build %>/fonts/'},
            {expand: true, cwd: '<%= conf.path.images %>/', src: ['**/*'], dest: '<%= conf.path.build %>/images/'},
            {expand: true, cwd: '<%= conf.path.javascript %>/', src: ['custom/*'], dest: '<%= conf.path.build %>/js/'}
        ]
    }
};