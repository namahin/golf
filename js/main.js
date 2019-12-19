// active wow js
new WOW().init();
// owl carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    autoWidth: true,
    margin: 30,
    nav: true,
    // animateIn: 'flipInX',
    // autoplay: true,
    // autoplayTimeout: 2500,
    // autoplayHoverPause: true
})

// $('.play').on('click', function () {
//     owl.trigger('play.owl.autoplay', [1000])
// })
// $('.stop').on('click', function () {
//     owl.trigger('stop.owl.autoplay')
// })

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});