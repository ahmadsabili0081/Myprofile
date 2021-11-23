window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
});

window.addEventListener('scroll',function(){
    const Scrollbtn = document.querySelector('.btnScroll');
    Scrollbtn.classList.toggle('hide',window.scrollY > 100);
})

function btnScroll(){
    document.body.scrollTop ="0";
    document.documentElement.scrollTop="0";
}