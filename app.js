const modalPopup = document.getElementById('modal');
const openModalPopupButton = document.getElementById('modal-window-toggle');
let toggle = false;
function toggleModal() {
    if (!toggle) {
        modalPopup.className = "visible";
        toggle = true;
    } else {
        modalPopup.className = "hidden";
        toggle = false;
    }
}


openModalPopupButton.addEventListener('click', toggleModal);
