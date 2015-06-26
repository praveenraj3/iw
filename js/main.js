//scroll animation    
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false // trigger animations on mobile devices (true is default)
    });
    wow.init();


$(window).load(function() {
    $('.loading').fadeOut();
    
});

$(document).ready(function() {
    
    $(".mm-page").scroll(function() {
        var h = $(window).scrollTop();
/*        if(h>200) {
            $('.menu-icon').fadeIn();
        }
        else {
            $('.menu-icon').fadeOut();
        }*/
        console.log(h)
    });
    
    //value
    $('.value h3').click(function() {
        $('.note').hide();
        $('.value h3').css('color', '#808080');
        $(this).next('p').show();
        $(this).css('color', '#ec1c24');
    });
    
    //sidebar
    $('.menu-icon').bigSlide({side: 'right', easyClose: true, menuWidth: '20em'});
    
});
