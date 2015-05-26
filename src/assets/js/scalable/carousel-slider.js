/**
 * Dependencies: jQuery, bootstrap/carousel.js
 *
 * Used with the carousel slider.
 * This is literally only to animate the slider.
 * If default carousel controls are used this is unneeded.
 *
 * Known issue: at certain viewport sizes, the indicator will be positioned just slightly
 * short or far of the container width. This is because I can't get damn decimals in the
 * left attribute.
*/
//
//
//+function($){
//    // indicator is already positioned initially, so need one less count
//    // to determine distance to move indicator
//    var numItems = $(".item").length;
//    var carouselIndicator = $(".carousel-progress-indicator");
//    var initialPosition = carouselIndicator.position().left;
//
//    $(window).resize(function(){
//        var indicatorWidth = $('.carousel-progress').width() / numItems;
//        // reset the indicator to it's initial position
//        carouselIndicator.css({left: initialPosition.toFixed(6) + 'px', width: indicatorWidth.toFixed(6)});
//    });
//    $(window).trigger('resize');
//
//    function moveIndicator(translateDirection){
//        // first, grab width of indicator container so we know the bounds
//        var containerWidth = $(".carousel-progress").width();
//
//        // grab current position of indicator
//        var currentPosition = carouselIndicator.position().left;
//
//        // grab width of indicator
//        var indicatorWidth = carouselIndicator.width();
//
//        // calculate where indicator should be moved to based on translateDirection
//        var indicatorPosition;
//        if (translateDirection == 'next') {
//            indicatorPosition = (currentPosition + indicatorWidth);
//            // check to see if out of container bounds to right
//            // container is offset by initial position as well
//            if (indicatorPosition > containerWidth){
//                // indicator is at leftmost position
//                indicatorPosition = initialPosition;
//            }
//        } else {
//            indicatorPosition = (currentPosition - indicatorWidth);
//            // check to see if out of container bounds to left
//            if (indicatorPosition < initialPosition){
//                // indicator is at the rightmost position
//                indicatorPosition = containerWidth - indicatorWidth + initialPosition;
//            }
//        }
//        carouselIndicator.css({left: indicatorPosition.toFixed(6) + 'px'});
//    }
//
//    $(".carousel-next").on('click', function(){
//        moveIndicator('next');
//    });
//    $(".carousel-previous").on('click', function(){
//        moveIndicator('prev');
//    });
//}(jQuery);
//
