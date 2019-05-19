$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 4000,
        pagination: false
    });

    if (document.querySelector('.typed')) {
        var typed = new Typed(".typed", {
            strings: ["Software Engineer", "Full Stack Developer", "Product Specialist", "RF Engineer", "Electronics Engineer", "Eletronics Technician"],
            typeSpeed: 70,
            loop: true,
            startDelay: 1000,
            showCursor: false
        });
    }

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });


    //when it reaches to the position, offset is postion from the top
    // var skillsTopoffSet = $(".skillsSection").offset().top;

    // $(window).scroll(function() {
    // if (window.pageYOffset > skillsTopoffSet - $(window).height() + 200) {
    $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    // }
    // });

    $("[data-fancybox]").fancybox();
    $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    })

    $("#filters a").click(function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        let selector = $(this).attr("data-filter");
        $('.items').isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });




});


$('.nav-icon').click(function() {
    console.log('success');
    $(".titleMessage").fadeOut("slow");
    $(".about_me").fadeOut("slow");
    $(".skills_part").fadeOut("slow");

})

$('.modal-close').click(function() {
    console.log('success');
    $(".titleMessage").fadeIn(1500);
    $(".about_me").fadeIn(1500);
    $(".skills_part").fadeIn(1500);
})