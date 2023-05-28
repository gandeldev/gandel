//HEADER OPTIONS
const homeOption = document.querySelector('.options-menu.menu-home')
const aboutMeOption = document.querySelector('.options-menu.menu-about-me')
const skillsOption = document.querySelector('.options-menu.menu-skills')
const contactMeOption = document.querySelector('.options-menu.menu-contact-me')
const projectBtn = document.querySelector('.my-projects')
const projectBtnBefore = document.querySelector('.my-projects::before')

//MAIN
const iam = document.querySelector('.iam')

//ABOUT ME
const description = document.querySelector('.description')

//CV
const cvButton = document.querySelector('.cv-button')

//TEMPLATES
const templateStore = document.querySelector('.template-store-button')

//CONTACT ME
const subtitle = document.querySelector('.subtitle')
const fullNameLabel = document.querySelector('.label-name.fullname')
const fullNameInput = document.querySelector('#username')
const emailLabel = document.querySelector('.label-name.email')
const emailInput = document.querySelector('#email')
const messageLabel = document.querySelector('.label-name.message')
const messageInput = document.querySelector('#message')
const submitBtn = document.querySelector('.submit')

//LANGUAGE
const englishButton = document.querySelector('.languages.english')
const spanishButton = document.querySelector('.languages.spanish')
const russianButton = document.querySelector('.languages.russian')
const chinesseButton = document.querySelector('.languages.chinesse')
const portuguesButton = document.querySelector('.languages.portugues')
const languages = document.querySelectorAll('.languages')

function projectButton(language) {
    projectBtn.classList.remove('project-btn-english', 'project-btn-spanish', 'project-btn-russian', 'project-btn-chinese', 'project-btn-portuguese');

    if (language === 'english') {
        projectBtn.classList.add('project-btn-english');
    } else if (language === 'spanish') {
        projectBtn.classList.add('project-btn-spanish');
    } else if (language === 'russian') {
        projectBtn.classList.add('project-btn-russian');
    } else if (language === 'chinesse') {
        projectBtn.classList.add('project-btn-chinese');
    } else if (language === 'portugues') {
        projectBtn.classList.add('project-btn-portuguese');
    }
}

function translatePage(language) {
    let languageFile = '../json/' + language + '.json'

    fetch(languageFile).then(response => response.json()).then(
        data => {
            //HEADER
            homeOption.textContent = data.header.Home
            aboutMeOption.textContent = data.header.AboutMe
            skillsOption.textContent = data.header.Skills
            contactMeOption.textContent = data.header.ContactMe
            projectBtn.textContent = data.header.projects
            projectButton(language)

            // MAIN
            iam.textContent = data.main.iam;

            // ABOUT ME
            description.textContent = data['about-me'].Description

            // CV
            cvButton.textContent = data['btn-cv'].cv

            // TEMPLATES
            templateStore.textContent = data['btn-store']['tmp-store']

            // CONTACT ME
            subtitle.textContent = data.contactme['contact-me'];
            fullNameLabel.textContent = data.contactme.fullname;
            fullNameInput.placeholder = data.contactme.fullname;
            emailLabel.textContent = data.contactme.email;
            emailInput.placeholder = data.contactme.email;
            messageLabel.textContent = data.contactme.message;
            messageInput.placeholder = data.contactme.message;
            submitBtn.value = data.contactme.submit;
        }
    )
}

document.querySelector('.languages.english').addEventListener('click', () => {
    translatePage('english')
})
document.querySelector('.languages.spanish').addEventListener('click', () => {
    translatePage('spanish')
})
document.querySelector('.languages.russian').addEventListener('click', () => {
    translatePage('russian')
})
document.querySelector('.languages.chinesse').addEventListener('click', () => {
    translatePage('chinesse')
})
document.querySelector('.languages.portugues').addEventListener('click', () => {
    translatePage('portugues')
})