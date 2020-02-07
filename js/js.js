
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav:false,
    autoplay:true,
    dots:false,
    margin:10
    
    });

    $('.slider').owlCarousel({
    loop:true,  
    nav:false,
    dots:false,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
    
    });

    var accordionOpened = false;

    $(".accordion-toggle-btn").click(function() {
        $(".accordion").toggleClass('opened');
    });

    var accordionOpened1 = false;

    $(".accordion1-toggle-btn").click(function() {
        $(".accordion1").toggleClass('opened1');
    });

  var owl = $('.owl-carousel');
   owl.owlCarousel();
  $('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
            });

  $('.owl-prev').click(function() {
    
    owl.trigger('prev.owl.carousel', [300]);
});

});


 
