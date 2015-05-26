/**
 * Dependencies: jQuery, enquire.js
 */
+function ($) {
    'use strict';
    var $footer = $('.footer-sticky').first(),
        $body = $('body'),
        $html = $('html'),
        footerHeight = null; // Gets set on first footerSticky() call

    function footerSticky() {
        var newFooterHeight = $footer.outerHeight(true); // account for margin and padding
        var offset = footerHeight || 0;

        // Only update if the footer height has changed
        if (footerHeight !== newFooterHeight) {
            footerHeight = newFooterHeight; // update new height

            // remove non digits from padding-bottom and last added footer height
            var paddingBottom = $body.css('padding-bottom').replace(/[^-\d\.]/g, '') - offset;

            // add the new padding to body including the new footer height
            $body.css({
                position: 'static',
                paddingBottom: (paddingBottom + newFooterHeight) + 'px'
            });

            $html.css({
                position: 'relative',
                minHeight: '100%'
            });
        }
    }


    // default bootstrap media queries
    var mediaQueries = [
        'screen and (min-width: 768px)',
        'screen and (min-width: 992px)',
        'screen and (min-width: 1200px)',
        'screen and (max-width: 480px)',
        'screen and (max-width: 767px)',
        'screen and (max-width: 991px)',
        'screen and (max-width: 1199px)'
    ];

    // call footerSticky() when a new media query is triggered
    $.each(mediaQueries, function (i, query) {
        enquire.register(query, {
            match: footerSticky
        });
    });


}(jQuery);