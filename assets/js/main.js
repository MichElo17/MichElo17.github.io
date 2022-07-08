var swiper = new Swiper('.blog-slider', {
    spaceBetween: 100,
    preventInteractionOnTransition: true,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    // autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});
swiper.autoplay.stop()


$("div[href]").click(function() {
    window.location = $(this).attr("href");
});