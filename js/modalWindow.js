let modal = document.getElementById('modalWindow');
let btn = document.getElementById('contacts');
let closeModal = document.getElementById('closeModal');
let body = document.getElementsByName('body');

btn.onclick = () => {
    modal.style.display = 'block';
    body.style.position = 'fixed';
    body.style.background = 'red';
};

closeModal.onclick = () => {
    modal.style.display = 'none';
    body.style.position = 'static';
};

window.onclick = event =>{
    if (event.target === modal){
        modal.style.display='none';
        body.style.position = 'static';
    }
};