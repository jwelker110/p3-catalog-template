/**
 * Dependencies: jQuery
 */

+function($){

    $('.text-collapser').collapser({
        mode: 'chars',
        truncate: 150,
        controlBtn: 'text-collapser-btn',
        showText: 'More...',
        hideText: 'Less...'
    });

}(jQuery);
