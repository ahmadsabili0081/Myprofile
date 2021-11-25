window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger')
    header.classList.toggle('sticky',window.scrollY > 0);
    hamburger.classList.toggle('color',window.scrollY > 50);

});

window.addEventListener('scroll',function(){
    const Scrollbtn = document.querySelector('.btnScroll');
    Scrollbtn.classList.toggle('hide',window.scrollY > 100);
})

function btnScroll(){
    document.body.scrollTop ="0";
    document.documentElement.scrollTop="0";
}