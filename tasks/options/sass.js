module.exports = {
  global: {
      options: {
          sourceMap: true,
          sourceComments: false,
          outputStyle: 'expanded'
      },
      files: [{
          expand: true,
          cwd: '<%= conf.path.css %>/',
          src: ['**/*.scss'],
          dest: '<%= conf.path.build %>/css',
          ext: '.css'
      }]
  }
};
