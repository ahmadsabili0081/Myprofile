let picts = document.getElementsByClassName('item-image');
let modal__gallery = document.getElementById('modalWindow');
let modalOpen = false;
let clickOutSide = false;

let modalClose = document.getElementById('ModalClose');
modalClose.addEventListener('click', ImageClose, false);

for(let i = 0; i < picts.length; i++){
    picts[i].addEventListener('click', imageOpen,false);
}
function imageOpen (item){
    listenerLaunch();
    modal__gallery.style.display ="flex";
    document.getElementById('modalPict').innerHTML= '<img src="'  + this.src + '">';
    clickOutSide = false;
    modalOpen = true;
}
function ImageClose (){
    modalOpen = false;
    modal__gallery.style.display ="none";
}

function listenerLaunch(){
    modal__gallery.addEventListener('click', function (evt){
        clickOutSide = !document.getElementById('modalPict').getElementsByTagName("img")[0].contains(evt.target);
        if(clickOutSide && modalOpen){
            modal__gallery.style.display = "none";
            modalOpen = false;
        }
    });
}