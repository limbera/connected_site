$('#whatHeadLink').on('click', function(event) {
    var target = $(whatExplanation);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 60
        }, 1000);
    }
});