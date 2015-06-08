

/**
 * Dependencies: jQuery
 *
 */

+function($){

    // TILE LISTENER
    //
    // When a tile is clicked the user gets redirected to the item's page
    $('.tile').on('click', function(event){
        // Tile that triggered click event
        var tile = $(this);
        // URL safe item name
        var simpleName = tile.data('simple-name');
        var gameId = tile.data('game-id');
        // Making sure the review button was not clicked on the tile
        // and the URL safe item name exists
        if (simpleName && !$(event.target).attr('data-toggle')) {
            $(location).attr('href', '/' + simpleName + '/' + gameId + '/'); // redirect user
        }
    });

}(jQuery);

