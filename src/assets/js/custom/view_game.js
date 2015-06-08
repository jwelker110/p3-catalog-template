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

    $('.reply').on('click', function(event){
        // get btn that was clicked
        var btn = $(this);
        var id = btn.data('actionid');
        var reply = $('.game-review-reply').filter('[data-replyid=' + id + ']');
        console.log(btn);
        console.log(id);
        console.log(reply);
        if (reply.data('shown')){
            // perform ajax call to submit comment
            // todo

            // rehide the comment field
            $(reply).css({'display': 'none'});
            reply.data('shown', false);
        } else {
            // show the comment textarea
            $(reply).css({'display': 'inherit'});
            reply.data('shown', true);
        }
    });

}(jQuery);
