    // var slideshowDeco = document.getElementsByClassName('.slideshow__deco'),
    //     slideshowImage = document.getElementsByClassName('.slide__img'),
    //     slideSide = document.getElementsByClassName('.slide__side'),
    //     slideNumber = document.getElementsByClassName('.slide__number'),
    //     slideTitle = document.getElementsByClassName('.slide__title'),
    //     slideSubtitle = document.getElementsByClassName('.slide__subtitle'),
    //     tl = new TimelineLite();

    // tl
    // .from(slideshowDeco, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
    // .from(slideshowImage, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
    // .from(slideSide, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
    // .from(slideNumber, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
    // .from(slideTitle, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
    // .from(slideSubtitle, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})

    (function($) {
        var slideshowDeco = $('.slideshow__deco-home'),
            slideImg = $('.slide__img-home'),
            tl = new TimelineMax();
    
        tl
            .fromTo(slideshowDeco, 0.5, {opacity: 0, scale: 5}, {opacity: 1, scale: 1, ease: SlowMo.easeOut})
            .fromTo(slideImg, 0.5, {opacity: 0, y: 200}, {opacity: 1, y: 10}, '-=0.1')
    })(jQuery);

    // tl.pause();

    // linkHome.on('click', function(){
    //     console.log('fuck');
    // });