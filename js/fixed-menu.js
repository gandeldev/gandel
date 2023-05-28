let headerSection = document.querySelector('.header');
let goBackButton = document.querySelector('.go-back')

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 80) {
        headerSection.classList.add('fixed');
        goBackButton.classList.add('active')
    } else {
        goBackButton.classList.remove('active')
        headerSection.classList.remove('fixed');
    }
});