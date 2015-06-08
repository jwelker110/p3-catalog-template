/**
 * Dependencies: jQuery
 */


+function($){

    // When a game cell is pressed, redirect user to appropriate page
    $('.game-cell').on('click', function(event){
        // Cell that was pressed
        var cell = $(this);
        // URL safe item name
        var simpleName = cell.data('simple-name');
        var gameId = cell.data('game-id');
        // Making sure the review button was not clicked on the cell
        // and the URL safe item name exists
        if (simpleName) {
            $(location).attr('href', '/' + simpleName + '/' + gameId + '/'); // redirect user
        }
    });

}(jQuery);
