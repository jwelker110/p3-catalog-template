module.exports = function(grunt) {


    function loadConfig(path) {
        var glob = require('glob'),
            object = {},
            key;
        glob.sync('*', {cwd: path}).forEach(function (option) {
            key = option.replace(/\.js$/,'');
            object[key] = require(path + option);
        });

        return object;
    }

    // Initial config
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        conf: grunt.file.readJSON('config.json')
    };

    // Load tasks from the tasks folder
    grunt.loadTasks('tasks');

    // Load all the tasks in tasks/options based on the filename
    // watch.js => watch{}
    grunt.util._.extend(config, loadConfig('./tasks/options/'));

    grunt.initConfig(config);

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['dev']);

};