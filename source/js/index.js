var popup = document.querySelector('.popup')
var popupbtn = document.querySelector('.button-link--js')
var popupclose = document.querySelector('.popup__cross')
var input = popup.querySelector('input')

popupbtn.addEventListener('click', function() {
    popup.classList.add('popup__open')
    input.focus()
})

popupclose.addEventListener('click', function() {
    popup.classList.remove('popup__open')
})

window.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && popup.classList.contains("popup__open")) {
        popup.classList.remove('popup__open');
        console.logo("Закрытие формы")
    }
})