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
    // $('.play').on('click',function(){
    //     owl.trigger('play.owl.autoplay',[1000])
    // })
    // $('.stop').on('click',function(){
    //     owl.trigger('stop.owl.autoplay')
    // })  
    
}());
//StickyNavbar
(function(){
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', ()=> {
        if(window.pageYOffset > 0) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    })
}());

