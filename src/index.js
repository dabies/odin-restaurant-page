import './styles.css';
import { display } from './pages.js';
console.log('Sup DBeezy');

//cache DOM
const $menuBtn = document.querySelector('.menu');
const $homeBtn = document.querySelector('.home');
const $aboutBtn = document.querySelector('.about');

//display home screen when customer first enters website
display('home');

//clear screen function
function clearScreen() {
    const screen = document.querySelector('.content');
    screen.innerHTML = '';
}

//event listeners
$menuBtn.addEventListener('click', () => {
    clearScreen();
    display('menu');
});

$homeBtn.addEventListener('click', () => {
    clearScreen();
    display('home');
});

$aboutBtn.addEventListener('click', () => {
    clearScreen();
    display('about');
});