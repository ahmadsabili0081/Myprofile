const skills = document.getElementById('skills');

skills.addEventListener('click',function(){
    const inside = document.querySelector('.inside');
    inside.classList.toggle('skillsActive');
    skills.classList.toggle('rotate');
    

});
// counter
document.addEventListener('DOMContentLoaded',() => {
    function counter(id,start,end,duratin){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duratin / range)),
        time = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(time);
            }
        }, step);
    }
    counter("counter1",0,80,8000);
    counter("counter2" ,0,80,8000);
    counter("counter3",0,50,8000);
    counter("counter4",0,50,8000);
    counter("counter5",0,60,8000);
    counter("counter6",0,60,8000);
    counter("counter7",0,60,8000);
    counter("counter8",0,60,8000);
    counter("counter9",0,63,8000);
})

const msClick = document.getElementById('msClick');
msClick.addEventListener('click',function(){
    const insideMs = document.querySelector('.insideMs');
    let rotate2 = document.getElementById('rotate2');
    insideMs.classList.toggle('skillActiveMS');
    msClick.classList.toggle("rotate2");
})