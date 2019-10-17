$('.carousel.thumbnail-indicator').on('slide.bs.carousel', function() {
  var carousel = this;
  setTimeout(function() {
    // Get the thumbnails
    var thumbnails = $(carousel).find(".carousel-indicators").children();
    // Get the current thumbnail
    var currentThumbnail = $(carousel).find(".carousel-indicators .active");
    // Get thumbnail's position
    var activePos = currentThumbnail.offset().left;// + currentThumbnail.width()/2;

    // Obtain the offset between the thumbnail and the center of container
    var width = thumbnails.parent().width();
    var maxScroll = thumbnails.parent()[0].scrollWidth - width;
    var offset = activePos - width/2;
    var scrollPos = thumbnails.parent().scrollLeft() + offset;
    scrollPos = Math.max(Math.min(scrollPos, maxScroll), 0);
    thumbnails.parent().animate({scrollLeft: scrollPos}, 500);
    //thumbnails.parent().scrollLeft(scrollPos);
  }, 10);
});
