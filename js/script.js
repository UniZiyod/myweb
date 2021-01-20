$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 4000,
        pagination: false
    })

    const typed = new Typed('.typed', {
        strings: ['Ziyods first project...', 'Young Web - Developer...', '...and freelancer'],
        typeSpeed: 80,
        loop: true,
        startDelay: 1500,
        showCursor: true,
        cursorChar: '|'
    })


})

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})



const topOffset = $('.section-skills').offset().top;
$(window).scroll(function () {
    console.log(topOffset - $(window).height() + 200);
    if (window.pageYOffset > topOffset - $(window).height() + 200) {
        $('.chart').easyPieChart({
            //your options goes here
            easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent))
            }
        });
    }
})

$('.skill').on('mousedown', function () {
    $(this).css('cursor', 'grabbing')
})

window.onload = function () {
    var countUp = new CountUp('target', 2000);
    countUp.start();
}

$('.grid').isotope({
    // options...
    itemSelector: '.grid-item',
    masonry: {
        columnWidth: 200
    }
});