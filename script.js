const menuBtn = document.querySelector('#hamburger-menu');
const menu = document.querySelector('.menu');
const closeMenuButton = document.querySelector('#closeMenu');
const service = document.querySelectorAll('.service');
const serviceWindow = document.querySelectorAll('.serviceWindow');
const closeServiceX = document.querySelectorAll('.closeWindow');
const menuItems = document.querySelectorAll('.menuItem');
const sections = document.getElementsByClassName('.section');

let modal;

//add showMenu class to menu class when hamburger is clicked
function openMenu() {
    console.log("open menu A");
    menu.classList.add('showMenu');
}

menuBtn.addEventListener('click', openMenu);

//remove showMenu class from menu class when #closeButton is clicked
function closeMenu(event) {
    console.log("close menu");
    menu.classList.remove('showMenu');
    event.preventDefault();
}

closeMenuButton.addEventListener('click', closeMenu);

//slideshow within testamonials section
let slideIndex = 0;
slideShow();

function slideShow() {
    const slides = document.querySelectorAll('.slides');
    
    for (let i=0; i <slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if(slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "flex";
    setTimeout(slideShow, 4000);
}

//event listener to make modal appear
for (let j=0; j<service.length; j++) {
    service[j].addEventListener('click', ()=> serviceDetails(j));
}

//opens modal when prompted
function serviceDetails(i) {
    let serviceNum = i;

    document.querySelector('dimmer').style.display = "block";
    serviceWindow[serviceNum].style.display = "flex";
    
    modal = serviceNum;

    dimmerListener(modal);
}

//closes service window if modal is open but area outside modal is selected
function dimmerListener() {
    document.querySelector('dimmer').addEventListener('mouseup', closeServiceWindow);
}

//when x within popup is clicked, close popup window
for (let j=0; j<service.length; j++) {
    closeServiceX[j].addEventListener('click', ()=> closeServiceWindow(j));
}

//close service window
function closeServiceWindow(i) {
    let serviceNum = i;

    serviceWindow[modal].style.display = "none";
    document.querySelector('dimmer').style.display = "none";
}

//event.preventDefault(); prevents submit from causing issues
document.querySelector('#contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
});

//close mobile nav when a link is clicked
for (let i=0; i<menuItems.length; i++) {
    menuItems[i].addEventListener('click', function closeMenus(event) {
        console.log("close menu C through i=" + i);
        menu.classList.remove('showMenu');
        window.location.href=("#section"+i);
        event.preventDefault();
    })
}

//make menu smaller when scroll down
const menuCheckpoint = 100;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > menuCheckpoint) {
        document.querySelector("#logo").height = "25";
        document.querySelector("nav").style.fontSize = "18px";
    } 
    else {
        document.querySelector("#logo").height = "75";
        document.querySelector("nav").style.fontSize = "25px";
    }
});