const skills = document.getElementById('skills');

skills.addEventListener('click',function(e){
    const inside = document.querySelector('.inside');
    const bar = document.querySelector('.html');
    const css = document.querySelector('.css');
    const js = document.querySelector('.js');
    const php = document.querySelector('.php');
    const bs = document.querySelector('.bs');
    const mysql = document.querySelector('.mysql');
    inside.classList.toggle('skillsActive');
    skills.classList.toggle('rotate');
    bar.classList.toggle('animation');
    css.classList.toggle('animation');
    js.classList.toggle('animation2');
    php.classList.toggle('animation2');
    bs.classList.toggle('animation3');
    mysql.classList.toggle('animation3');
});

const msClick = document.getElementById('msClick');
msClick.addEventListener('click',function(){
    const insideMs = document.querySelector('.insideMs');
    const word = document.querySelector('.word');
    const excle = document.querySelector('.excle');
    const pp = document.querySelector('.pp');
    insideMs.classList.toggle('skillActiveMS');
    msClick.classList.toggle('rotate2');
    word.classList.toggle('animationMS');
    excle.classList.toggle('animationM2');
    pp.classList.toggle('animationMS3')
})