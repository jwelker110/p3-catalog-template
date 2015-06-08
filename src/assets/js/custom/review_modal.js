

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

}(jQuery);

