
/**
 * Dependencies: jQuery, TODO add enquire.js support
 */

+function($){

    //Animate in the tiles when the page first loads
    var tiles = $(".tile");
    tiles.css({opacity: 0});

    function showElement(element){
        $(element).animate({opacity: 1}, 1500);
        setTimeout(function(){
            showElement(element.parent().next().find(".tile"));
        }, 300);
    }

    showElement(tiles.first());

    var breakpoint = 0;

    // Resize listener to account for changes in doc size
    // Only called when breakpoints are reached
    $(window).resize(function () {
        if (window.matchMedia("screen and (min-width: 1200px)").matches && breakpoint != 1200) {
            breakpoint = 1200;
            resizeTiles(4); // Current tiles in the row
        } else if (window.matchMedia("screen and (min-width: 992px) and (max-width: 1199px)").matches && breakpoint != 992) {
            breakpoint = 992;
            resizeTiles(3); // Current tiles in the row
        } else if (window.matchMedia("screen and (min-width: 668px) and (max-width: 991px)").matches && breakpoint != 668) {
            breakpoint = 668;
            resizeTiles(2); // Current tiles in the row
        } else {
            return;
        }


    });

    $(window).trigger('resize');

}(jQuery);

/*
 * Removes any added padding-top from movie tiles
 */
function resetTileSize(){
    var tiles = $('.tile');
    // Resetting height back to default height
    for(var i = 0; i < tiles.length; i++){
        $(tiles[i]).css('padding-top', '0');
    }
}

/*
 * Adds padding-top to tiles in each row to align by bottom
 * of the tiles.
 */
function resizeTiles(tilesPerRow){
    resetTileSize();
    var tiles = $('.tile');
    var index;
    var heightChanged;
    var currentHeight;

    // Iterate through the tiles in each row and resize according to tallest tile
    for(var i = 0; i < tiles.length; i += tilesPerRow) {
        heightChanged = false;

        // Getting max height of the tiles in the row
        var maxHeight = $(tiles[i]).outerHeight();
        for (index = i; index < tiles.length && index < i + tilesPerRow; index++) {
            currentHeight = $(tiles[index]).outerHeight();
            if (currentHeight != maxHeight) {
                heightChanged = true; // Tiles need resized
            }
            if (currentHeight > maxHeight) {
                maxHeight = currentHeight;
            }
        }

        if(heightChanged) {
            // Setting the height of tiles in the row
            for (index = i; index < tiles.length && index < i + tilesPerRow; index++) {
                $(tiles[index]).css('padding-top', (maxHeight - $(tiles[index]).outerHeight()) + 'px');
            }
        }
    }
}

