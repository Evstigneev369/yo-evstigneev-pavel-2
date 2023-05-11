const mobileHeader = document.querySelector('.mobile-header')
const burgerBtn = document.querySelector('.header__burger-menu--js')
const burgerClose = document.querySelector('.mobile-header__burger-menu')

burgerBtn.addEventListener('click', function() {
    mobileHeader.classList.add('mobile-header__open')
    input.focus()
})

burgerClose.addEventListener('click', function() {
    mobileHeader.classList.remove('mobile-header__open')
})

window.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && mobileHeader.classList.contains("mobile-header__open")) {
        mobileHeader.classList.remove('mobile-header__open');
        console.logo("Закрытие формы")
    }
})