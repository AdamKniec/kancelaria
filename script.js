
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

//Mobile navbar handler
(function(){
    let hamburger = document.querySelector('.hamburger');
    let navList = document.querySelector('.navbar ul');
    function toggleMenu (e) {
        if (e.target == hamburger) {
            navList.classList.toggle('mobile');
        } else {
            navList.classList.remove('mobile');
        }
    }
    document.body.addEventListener('click', toggleMenu);
}());
//Modal handler
(function(){
    let modal = document.querySelector('.modal');
    let termsTrigger = document.querySelector('.termsTrigger');
    let closeButton = document.querySelector('.closeButton');
    let form = document.querySelector('form');
        form.addEventListener('click', (e)=> {
            if(e.target == termsTrigger) {
                modal.style.display = "flex";
            } else if (e.target == modal || e.target == closeButton)  {
                modal.style.display = "none";
            }
        })
}());

//FORM SUBMISSION HANDLER
(function(){
    let checkbox = document.querySelector('.termsAgreement');
    let form = document.querySelector('form');
    let agreementParagraph = document.querySelector('.agreement p');
    
    form.addEventListener('submit' , (e) => {
        e.preventDefault();
        if(checkbox.checked == true) {
            form.submit();
        } else {
            agreementParagraph.style.color = "red";
        }
    })
}());
// Map handler
(function(){
    var map = L.map('mapContainer').setView([52.410090,16.933470], 18);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

    L.marker([52.410090,16.933470]).addTo(map)
        .bindPopup("<img src=imgs/entrance.jpg alt = Zdjęcie wejcia style=width:200px; height: 200px;/>")
        .openPopup();
}());
//Smooth scroll
(function($) {
    $(document).ready(function(){
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
    
                var hash = this.hash;
                var targetOffset = $(hash).offset().top - 80;
                if(hash ==="#aboutUs"){
                    targetOffset += 80;
                }
    
                $('html, body').animate({
                    scrollTop: targetOffset
                }, 800, function(){
    
                });
            }
        });
    });
    })(jQuery);