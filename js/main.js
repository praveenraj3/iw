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
    

    
    //value
    $('.value h3').click(function() {
        $('.note').hide();
        $('.value h3').css('color', '#808080');
        $(this).next('p').show();
        $(this).css('color', '#ec1c24');
    });
    
    //sidebar
    $('.menu-link').bigSlide({side: 'right', easyClose: true, menuWidth: '20em'});
    
    //about popup
    
    $('.popup').click(function(e) {
        e.preventDefault();
        var img = $(this).data('img'),
            text = $(this).data('text');
        $('.popupImage').css('background-image', 'url(img/' + img +')');
        $('.popupText').html(text);
        $('#page').css('filter', 'blur(7px)').css('webkitFilter', 'blur(7px)').css('mozFilter', 'blur(7px)').css('oFilter', 'blur(7px)').css('msFilter', 'blur(7px)');
        
        $('#popup').fadeIn(function() {
            $(this).addClass('on');
        });
        
    });
    
    function closePop() {
            if($('#popup').hasClass('on')) {
                $('#popup').fadeOut();
                $('#popup').removeClass('on');
                $('#page').css('filter', 'blur(0px)').css('webkitFilter', 'blur(0px)').css('mozFilter', 'blur(0px)').css('oFilter', 'blur(0px)').css('msFilter', 'blur(0px)');
            }
    }
    
    $(document).click(function() { closePop(); });
    $(document).keyup(function(e) {
        if(e.keyCode == 27) { closePop(); }
    });
    
    //about popup end
    
    //smooth scroling

$(function() { $('a[href*=#]:not([href=#])').click(function() { if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) { var target = $(this.hash); target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); if (target.length) { $('html,body').animate({ scrollTop: target.offset().top }, 1000); return false; } } }); });
    
});


