const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click',function(e){
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
    hamburger.classList.toggle('rotate');
});