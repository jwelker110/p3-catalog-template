

/**
 * Dependencies: jQuery
 *
 */

+function($){

    $('#add-review-modal').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget); // Button that triggered modal
        var title = button.data('title');
        $('#add-review-title').text((title == null ? 'Review A Game' : title));
        // set the selected property of option for selected game to true
        // and the rest to false
        if (title) {
            $('#choose-game option').prop('selected', false).filter('[value=' + '"' + title + '"' + ']').prop('selected', 'selected');
        }
    });

    // ajax call to submit a review from the modal
    $('#review-submit-btn').on('click', function(event){
        // grabbing the form contents
        var name = $('#choose-game').val();
        var rating = $('#choose-rating').val();
        var review = $('#review-text').val();

        $.post("/add_review/", {game_simple_name: name, game_rating: rating, game_review: review})
            .done(function(data){
                window.location.reload();
            })
            .fail(function(data){
                // clear previous alerts
                $('.alert').remove();
                // if comment submission fails, alert the user.
                $('.form-background .form-group').first().before('<div class="alert alert-danger">Could not submit review. Please try again.</div>')
            });

    })

}(jQuery);

