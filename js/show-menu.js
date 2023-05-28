const btnMenu = document.querySelector('.button-menu')
const sectionBody = document.querySelector('.body')
const sectionHeader = document.querySelector('.header')
const menu = document.querySelector('.nav')
const myProjects = document.querySelector('.my-projects')
let active = false

btnMenu.addEventListener('click', ()=>{
    sectionBody.classList.toggle('fix')
    if (active && window.pageYOffset < 80) {
        sectionHeader.classList.remove('fixed')
        active = false
    } else {
        sectionHeader.classList.add('fixed')
        active = true
    }
    menu.classList.toggle('active')
    myProjects.classList.toggle('active')
})