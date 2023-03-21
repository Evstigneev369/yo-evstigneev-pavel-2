var mobileheader = document.querySelector('.mobile-header')
var burgerbtn = document.querySelector('.header__burger-menu--js')
var burgerclose = document.querySelector('.mobile-header__burger-menu')
var input = mobileheader.querySelector('input')

burgerbtn.addEventListener('click', function() {
    mobileheader.classList.add('mobile-header__open')
    input.focus()
})

burgerclose.addEventListener('click', function() {
    popup.classList.remove('mobile-header__open')
})

window.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && mobileheader.classList.contains("mobile-header__open")) {
        mobileheader.classList.remove('mobile-header__open');
        console.logo("Закрытие формы")
    }
})