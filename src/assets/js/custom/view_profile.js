
/**
 * Dependencies: jQuery, jquery.collapser.js
 */

+function($){

    // Text-collapser to minimize space taken by reviews/comments
    $('.text-collapser').collapser({
        mode: 'lines',
        truncate: 4,
        controlBtn: 'text-collapser-btn',
        showText: 'More...',
        hideText: 'Less...'
    });

}(jQuery);

