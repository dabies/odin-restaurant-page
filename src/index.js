import './styles.css';
import { display } from './pages.js';
import { highlightButton, removeHighlights } from './buttonHighlights.js';
console.log('Sup DBeezy');

//cache DOM
const $menuBtn = document.querySelector('.menu');
const $homeBtn = document.querySelector('.home');
const $aboutBtn = document.querySelector('.about');
const $buttons = document.querySelectorAll('button');

//display home screen when customer first enters website
display('home');
highlightButton($homeBtn);

//clear screen function
function clearScreen() {
    const screen = document.querySelector('.content');
    screen.innerHTML = '';
}

//event listeners
$menuBtn.addEventListener('click', () => {
    removeHighlights($buttons);
    highlightButton($menuBtn);
    clearScreen();
    display('menu');
});

$homeBtn.addEventListener('click', () => {
    removeHighlights($buttons);
    highlightButton($homeBtn);
    clearScreen();
    display('home');
});

$aboutBtn.addEventListener('click', () => {
    removeHighlights($buttons);
    highlightButton($aboutBtn);
    clearScreen();
    display('about');
});