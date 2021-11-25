// modal button
let Modal = document.getElementById('modalCV');
let OpenModal = document.getElementById('ModalContent');
let CloseModal = document.getElementById('CloseBtn');

OpenModal.addEventListener('click', OpenBtn);
CloseModal.addEventListener('click', CloseBtn);
window.addEventListener('click', OutSideClick);

function OpenBtn(){
    Modal.style.display="block";
}
function CloseBtn(){
    Modal.style.display="none";
}
function  OutSideClick(e){
    if(e.target == Modal){
        Modal.style.display ="none";
    }
}




let modal2 = document.getElementById('modalCV2');
let OpenModal2 = document.getElementById('modalContent');
let CloseModal2 = document.getElementById('CloseBtn2');

OpenModal2.addEventListener('click', OpenBtn2);
CloseModal2.addEventListener('click', CloseBtn2);
window.addEventListener('click',OutSideClick2);

function OpenBtn2(){
    modal2.style.display="block";
}
function CloseBtn2 (){
    modal2.style.display="none";
}
function OutSideClick2 (e){
    if(e.target == modal2){
        modal2.style.display="none";
    }
}



let modal3 = document.getElementById('modalCV3');
let OpenModal3 = document.getElementById('modalContent3');
let CloseModal3 = document.getElementById('CloseBtn3');

OpenModal3.addEventListener('click',OpenBtn3);
CloseModal3.addEventListener('click',CloseBtn3);
window.addEventListener('click', OutSideClick3);

function OpenBtn3 (){
    modal3.style.display="block";
}
function CloseBtn3 (){
    modal3.style.display="none";
}
function OutSideClick3(e){
    if(e.target == modal3){
        modal3.style.display="none";
    }
}


// modal gallery
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