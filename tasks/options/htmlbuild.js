module.exports = {
    dist: {
        src: '<%= conf.path.src %>/*.html',
        dest: '<%= conf.path.build %>/',
        options: {
            beautify: true,
            sections: {
                "head-prefix": '<%= conf.path.assets %>/fixtures/head-prefix.html',
                "body-postfix": '<%= conf.path.assets %>/fixtures/body-postfix.html',
                layout: {
                    banner: '<%= conf.path.assets %>/fixtures/layout/banner.html',
                    navbar: '<%= conf.path.assets %>/fixtures/layout/navbar.html',
                    footer: '<%= conf.path.assets %>/fixtures/layout/footer.html'
                },
                component: {
                    carousel: '<%= conf.path.assets %>/fixtures/components/carousel.html',
                    tile: '<%= conf.path.assets %>/fixtures/components/tile.html'
                }
            },
            styles: {
                main: '<%= conf.path.build %>/css/main.css'
            }
        }
    }
};