
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
