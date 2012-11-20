$(function() {
    $('#slideshow-wrapper').hover(
        function() {
            $('#slideshow-carousel').trigger( 'pause' );
            $('#slideshow-thumbnails').parent().animate({
                top: 280
            });
        }, function() {
            
            $('#slideshow-carousel').trigger( 'play' );
            $('#slideshow-thumbnails').parent().animate({
                top: 375
            });
        }
    );

    $('#slideshow-carousel').carouFredSel({
        scroll: {
            fx: 'crossfade',
            onBefore: function( data ) {
                $('#slideshow-thumbnails').trigger( 'slideTo', [ $('#slideshow-thumbnails img[alt='+ data.items.visible.attr( 'alt' ) +']'), -2 ] );
            }
        }
    });

    $('#slideshow-thumbnails').carouFredSel({
        auto: false,
        items: {
            start: -2
        }
    });

    $('#slideshow-thumbnails img').click(function() {
        $('#slideshow-carousel').trigger( 'slideTo', [ $('#slideshow-carousel img[alt='+ $(this).attr( 'alt' ) +']') ] );

    }).css( 'cursor', 'pointer' );
});