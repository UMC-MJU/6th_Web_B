const openBElement = document.getElementById('openB');
const closeBElement = document.getElementById('closeB');
const modalWrapper = document.querySelector('.modal-wrapper');

openBElement.onclick = () =>{
    console.log('open')
    modalWrapper.style.display = "flex";
};

closeBElement.onclick = () =>{
    modalWrapper.style.display = "none";
}