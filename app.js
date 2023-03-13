const modalPopup = document.getElementById('modal');
const editPlayerOne = document.getElementById('edit-player-one');
const editPlayerTwo = document.getElementById('edit-player-two');
function toggleModal(event) {
        modalPopup.className = "visible";
        const insertPlayerName = document.getElementById('insert-player-name');
        if (event.target.id == "edit-player-one") {
            insertPlayerName.textContent = "Player One";
        } else {
            insertPlayerName.textContent = "Player Two"
        }

}


editPlayerOne.addEventListener('click', toggleModal);
editPlayerTwo.addEventListener('click', toggleModal);
