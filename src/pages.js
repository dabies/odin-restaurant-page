import menuImg from './images/menu.jpg';
import homeImg from './images/home.jpg';
import aboutImg from './images/about.jpg';

//cache DOM
const $pageDiv = document.querySelector('div');
const $header = document.querySelector('header');

//display function
function display(page) {
    addImage(page);
    addText(page);
}

//function for adding image to page
function addImage(page) {
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');
    const pageImage = document.createElement('img');
    if (page === 'menu') {
        pageImage.src = menuImg;
    } else if (page === 'about') {
        pageImage.src = aboutImg;
    } else if (page === 'home') {
        pageImage.src = homeImg;
    }
    imageDiv.appendChild(pageImage);
    $pageDiv.appendChild(imageDiv);
}

//function for adding text to page
function addText(page) {
    const textDiv = document.createElement('div');
    textDiv.classList.add('text');
    const textHeader = document.createElement('h1');
    const textPara = document.createElement('p');
    if (page === 'menu') {
        textHeader.textContent = 'Menu';
        textPara.textContent = "You may be thinking, hey I thought you guys were a taco shop? We did too, until we realized waffles > tacos."
    } else if (page === 'about') {
        textHeader.textContent = 'About Us';
        textPara.textContent = "We're a family run business that's been operating as of two days ago when I started this assignment!";
    } else {
        textHeader.textContent = "Daniel's Taco Shack";
        textPara.textContent = "Come check out Daniel's Taco Shack, located in Coronado, California. Situated right out front of the Hotel del Coronado, we offer a multitude of tasty taco options for you to enjoy on the beach!";
    }
    textDiv.appendChild(textHeader);
    textDiv.appendChild(textPara);
    $pageDiv.appendChild(textDiv);
}

export {display, addImage, addText};