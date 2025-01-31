// Window Scroll

$(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});

//Document Ready

$(document).ready(function () {
    // Typing Animation
    var typed = new Typed('#type-it', {
        strings: ['Software Engineer', 'Student', 'Developer'],
        typeSpeed: 250,
        loop: true
    });
});