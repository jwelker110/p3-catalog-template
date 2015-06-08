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

    // Listeners to handle comments posted
    $('.reply').on('click', function(event){
        // get btn that was clicked
        var btn = $(this);
        // get the id of the post to reply to
        var id = btn.data('action-id');
        // get the hidden reply field for the post
        var reply = $('.game-review-reply').filter('[data-reply-id=' + id + ']');

        // if reply field is already shown, perform ajax
        // to submit the contents of field
        if (reply.data('shown')){
            // get the text from the form
            var form = reply.find('.game-review-reply-text');
            var formText = form.val();

            if (formText) {
                // perform ajax call to submit comment
                var req = $.post("/add_comment/", {post_id: id, text: formText})
                    .done(function(data){
                        form.val('');
                        var htmlStr = "";
                        htmlStr += '<div class="review-reply" data-review-id="' + id + '">\
                                        <div class="game-review-author">\
                                            <span class="review-btn author" data-user-id="' + id + '">TestUser123</span> Replied:\
                                        </div>\
                                        <div class="game-review-text text-collapser">\
                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;' + data.text + '</p>\
                                        </div>\
                                    </div>';
                        // find last comment and insert new comment after it
                        var comment = $('.review-reply').filter('[data-review-id=' + id + ']').last();
                        comment.after(htmlStr);

                        // rehide the comment field after submission
                        $(reply).css({'display': 'none'});
                        reply.data('shown', false);

                    }).fail(function(data){
                        // clear previous alerts
                        $('.alert').remove();
                        // if comment submission fails, alert the user.
                        form.before('<div class="alert alert-danger">Could not submit comment. Please try again.</div>')
                    });
            }
        } else {
            // clear previous alerts
            $('.alert').remove();
            // show the comment textarea
            $(reply).css({'display': 'inherit'});
            reply.data('shown', true);
        }
    });

    // Listeners to redirect users to author profiles
    $('.author').on('click', function(event){
        // get the btn that was pressed
        var btn = $(this);
        var userId = btn.data('user-id');
        window.location = '/view/profile/' + userId + '/'
    });

}(jQuery);
