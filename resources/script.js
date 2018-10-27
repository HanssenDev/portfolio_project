$(document).ready(function() {
    
    /* For the sticky navigation */
    $('.js--section-projects').waypoint(function(direction) {
        if (direction == "down") {
            $('header nav').addClass('sticky')
        } else {
            $('header nav').removeClass('sticky')
        }
    }, {
        offset: '180px;'
    });
    
    
    /* For the scroll on buttons */
    
    $('.js--scroll-to-projects').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-projects').offset().top-80}, 800)
    });
        
    
    /* For the scroll on links */
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top-80
            }, 800, function() {
            });
          }
        }
      });
    
    /* For the animations on scroll */
     $('.js--nav').waypoint(function(direction) {
        $('.js--nav').addClass('animated fadeInDown');
    }, {
        offset: '100%'
    });
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInLeft');
    }, {
        offset: '100%'
    });
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-info').addClass('animated fadeInRight');
    }, {
        offset: '100%'
    });
    
     $('.js--project-1').waypoint(function(direction) {
        $('.js--project-1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    
    $('.js--project-2').waypoint(function(direction) {
        $('.js--project-2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    
    $('.js--project-3').waypoint(function(direction) {
        $('.js--project-3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    
    $('.js--project-4').waypoint(function(direction) {
        $('.js--project-4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '100%'
    });
    
    
    
    /* For the responsive navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
    
        nav.slideToggle(200);
    
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }    
    });   
});
                  
