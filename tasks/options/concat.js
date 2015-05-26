module.exports = {
    bootstrap: {
        src: [
            "<%= conf.path.javascript %>/vendors/bootstrap/transition.js",
            "<%= conf.path.javascript %>/vendors/bootstrap/alert.js",
            "<%= conf.path.javascript %>/vendors/bootstrap/button.js",
            "<%= conf.path.javascript %>/scalable/carousel-slider.js",
            "<%= conf.path.javascript %>/vendors/bootstrap/carousel.js",
            "<%= conf.path.javascript %>/vendors/bootstrap/collapse.js",
            "<%= conf.path.javascript %>/vendors/bootstrap/dropdown.js",
            "<%= conf.path.javascript %>/vendors/bootstrap/modal.js",
            "<%= conf.path.javascript %>/vendors/bootstrap/tooltip.js",
            "<%= conf.path.javascript %>/vendors/bootstrap/popover.js",
            "<%= conf.path.javascript %>/vendors/bootstrap/scrollspy.js",
            "<%= conf.path.javascript %>/vendors/bootstrap/tab.js",
            "<%= conf.path.javascript %>/vendors/bootstrap/affix.js",
            "<%= conf.path.javascript %>/vendors/enquire.js",
            "<%= conf.path.javascript %>/scalable/footer-sticky.js",
            "<%= conf.path.javascript %>/scalable/tile.js"
        ],
        dest: '<%= conf.path.build %>/js/bootstrap.js'
    }
};