
//OwlGallery handler
(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        // items:2,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:false
            },
            1000:{
                items:2,
                nav:true,
                loop:true
            }
        }
        
    });
}());

//OwlGallery handler
(function(){
    var owl = $('.owl-team owl-carousel');
    owl.owlCarousel({
        items:2,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
        
    });
}());