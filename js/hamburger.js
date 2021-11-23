const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click',function(e){
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
    hamburger.classList.toggle('rotate');
});

const section = document.querySelectorAll('section[id]');
window.addEventListener('scroll', navScroll);
function navScroll (){
    let scrollY = window.pageYOffset;

    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add('active');
        }else{
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove('active'); 
        }
    });
}



