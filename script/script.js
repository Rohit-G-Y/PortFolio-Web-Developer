//--------------------------------------------Dark-Mode-Code-------------------------------------//

let moon_icon = document.querySelector('.ri-moon-fill');
let sun_icon = document.querySelector('.ri-sun-fill');
let mainBody = document.querySelector('body');
let infoContainer = document.querySelector('.info-container');
let informationContainer = document.querySelectorAll('.information-container');
let iconInfoContainer = document.querySelector('.icons-info-container');
let shareButton = document.querySelector('.share-button');
let socialIcons = document.querySelectorAll('.social-icon-links');
let social = document.getElementsByClassName('social-icon-links');
let timeLabel = document.querySelectorAll('.time');
let verticalLine = document.querySelector('.vertical-line');
let projectVerticalLine = document.querySelector('.project-vertical-line');
let _e_verticalLine = document.querySelector('.edu-vertical-line');
let horizontalLine = document.querySelectorAll('.horizontal-line');
let projecthorizontalLine = document.querySelectorAll('.project-horizontal-line');
let tooltipText = document.querySelectorAll('.tooltiptext');
let expIconBtn = document.querySelector('#exp-icon-btn');
let workExpSection = document.querySelector('#worl-info');
let expLinkIconBtn = document.querySelector('#exp-icon-btn');
let aboutSection = document.querySelector('#about-section-container');
let aboutIconBtn = document.querySelector('#about-icon-btn');
let certificateSection = document.querySelector('#certificate-info');
let certificateIconBtn = document.querySelector('#certificate-icon-btn');
let eductionSection = document.querySelector('#education-info');
let educationIconBtn = document.querySelector('#education-icon-btn');
let projectSection = document.querySelector('#project-info');
let projectIconBtn = document.querySelector('#project-icon-btn');
let letsconnectSection = document.querySelector('#letsconnect-info');
let letsconnectbtn = document.querySelector('#letsconnect-icon-btn');
let langSkills = document.querySelectorAll('.lang');
let linkSocialICons = document.querySelectorAll('.icon-link-buttons');
let progressJS = document.querySelector('.progress-bar-js');
let progressReact = document.querySelector('.progress-bar-react');
let progressHtml = document.querySelector('.progress-bar-html');
let progressNode = document.querySelector('.progress-bar-node');
let progressGit = document.querySelector('.progress-bar-git');
let progressSteps1 = document.querySelectorAll('.step1');
let progressSteps2 = document.querySelectorAll('.step2');
let progressSteps3 = document.querySelectorAll('.step3');
let progressPercent1 = document.querySelector('.parcent1');
let progressPercent2 = document.querySelector('.parcent2');
let progressPercent3 = document.querySelector('.parcent3');
let scrollUpBtn = document.querySelector('.scroll-up-button');
let mainSectionContainer = document.querySelector('#main-section-container');
let contactForm = document.querySelector('#contactForm');
let contactSubmit = document.querySelector('.contactSubmit');
let contactSubmittxt = document.querySelector('#contactSubmittxt');
let sendMessegeIcon = document.querySelector('.ri-send-plane-fill');
let downloadCBBtn = document.querySelector('.cv-download-button');

window.onload = function () { }

function fillColor(num) {
    for (let i = 0; i < num; i++) {
        this[i].style.backgroundColor = '#d6eef9';
        this[i].style.border = '2px solid #c5e2db';
        this[i].style.transition = `background-color ${i * 1.3}s`;
    }
}
fillColor.call(progressSteps1, 6);
fillColor.call(progressSteps2, 9);
fillColor.call(progressSteps3, 8);

progressPercent1.style.width = "55%";
progressPercent2.style.width = "85%";
progressPercent3.style.width = "75%";

progressJS.setAttribute('value', '85');
progressReact.setAttribute('value', '40');
progressHtml.setAttribute('value', '80');
progressNode.setAttribute('value', '80');
progressGit.setAttribute('value', '80');

console.log(progressJS);

function darkModeSwitch(objectArr, className) {
    objectArr.forEach((e) => {
        e.className = className;
    });
}

let darkModeMap = [
    { element: horizontalLine, class: 'horizontal-line-dark-mode' },
    { element: projecthorizontalLine, class: 'project-horizontal-line-dark-mode' },
    { element: linkSocialICons, class: 'icon-link-buttons-dark-mode' },
    { element: tooltipText, class: 'tooltiptext-dark-mode' },
    { element: timeLabel, class: 'time-dark-mode' },
    { element: informationContainer, class: 'information-container-dark-mode' },
    { element: socialIcons, class: 'social-icon-links-dark-mode' },
    { element: langSkills, class: 'lang-dark-mode' },
];


function switchToDarkMode(enable) {
    darkModeMap.forEach((set) => {
        set.element.forEach((elm) => {
            elm.classList.toggle(set.class, enable);
        });
    })
}

moon_icon.addEventListener('click', function (e) {

    moon_icon.style.display = 'none';
    sun_icon.style.display = 'inline-block';

    sun_icon.style.color = '#b5b5b5';
    mainBody.style.backgroundColor = '#000000';
    mainBody.style.color = '#ffffff';
    infoContainer.className = 'info-container-dark-mode';
    verticalLine.className = 'vertical-line-dark-mode';
    _e_verticalLine.className = 'edu-vertical-line-dark-mode';
    projectVerticalLine.className = 'project-vertical-line-dark-mode';
    iconInfoContainer.className = 'icons-info-container-dark-mode';
    shareButton.className = 'share-button-dark-mode';
    scrollUpBtn.className = 'scroll-up-button-dark-mode';
    downloadCBBtn.className = 'cv-download-button-dark-mode';

    switchToDarkMode(true);

    document.body.style.backgroundImage = `url('/images/bg_dark_mode.png')`;

});

sun_icon.addEventListener('click', function (e) {

    moon_icon.style.display = 'inline-block';
    sun_icon.style.display = 'none';

    mainBody.style.backgroundColor = '#ffffff';
    mainBody.style.color = '#000000';
    infoContainer.className = 'info-container';
    verticalLine.className = 'vertical-line';
    projectVerticalLine.className = 'project-vertical-line';
    _e_verticalLine.className = 'edu-vertical-line';
    iconInfoContainer.className = 'icons-info-container';
    shareButton.className = 'share-button';
    scrollUpBtn.className = 'scroll-up-button';
    downloadCBBtn.className = 'cv-download-button';

    switchToDarkMode(false);

    document.body.style.backgroundImage = `url('/images/bg.png')`
});

//--------------------------------------------Dark-Mode-Code-Ends-------------------------------------//

//-------------------------------code-for-Curosel-Template----------------------------------//
// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//         el: ".swiper-pagination",
//         dynamicBullets: true,
//     },
// });

// var swiper = new Swiper(".mySwiper", {
//     zoom: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//-------------------------------code-for-Curosel-Template-Ends----------------------------------//

expIconBtn.addEventListener('click', () => {
    workExpSection.scrollIntoView({ behavior: "smooth", inline: "nearest" });
});

aboutIconBtn.addEventListener('click', () => {
    mainSectionContainer.scrollIntoView({ behavior: "smooth", inline: "nearest" });
});

certificateIconBtn.addEventListener('click', () => {
    certificateSection.scrollIntoView({ behavior: "smooth", inline: "nearest" });
});

educationIconBtn.addEventListener('click', () => {
    eductionSection.scrollIntoView({ behavior: "smooth", inline: "nearest" });
});

scrollUpBtn.addEventListener('click', () => {
    mainSectionContainer.scrollIntoView({ behavior: "smooth", inline: "nearest" });
});

projectIconBtn.addEventListener('click', () => {
    projectSection.scrollIntoView({ behavior: "smooth", inline: "nearest" });
});

letsconnectbtn.addEventListener('click', () => {
    letsconnectSection.scrollIntoView({ behavior: "smooth", inline: "nearest" });
})

window.onscroll = function () {
    console.log('scroll')
    scrollFunction();
};

function scrollFunction() {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 30 ? scrollUpBtn.style.display = 'flex' : scrollUpBtn.style.display = 'none';
}

//Share CV waya email code
contactForm.addEventListener('click', function (event) {
    console.log(contactSubmit.classList);

    event.preventDefault();
    if (document.getElementById("nameText").value == '' || document.getElementById("emailText").value == '' || document.getElementById("messageText").value == '') return;

    if (contactSubmit.classList[0] === 'contactSubmit') {
        contactSubmit.classList.add('contactSubmitSelected');
        contactSubmittxt.textContent = 'Message Sent ';
        sendMessegeIcon.style.color = "#316937";
    }

    setTimeout(function () {
        if (contactSubmit.classList[0] === 'contactSubmit') {
            contactSubmit.classList.remove('contactSubmitSelected');
            contactSubmittxt.textContent = 'Send Message ';
            sendMessegeIcon.style.color = "#3c6e86";
        }
    }, 2000);

    emailjs.send("service_cox1g97", "template_d7svt7s", {
        name: document.getElementById("nameText").value,
        email: document.getElementById("emailText").value,
        message: document.getElementById("messageText").value
    }).then(() => console.log('Message Sent!'), (error) => console.log('Message Faild: ' + error));



    document.getElementById("nameText").value = '';
    document.getElementById("emailText").value = '';
    document.getElementById("messageText").value = '';
});