//function to highlight a given button
function highlightButton(button) {
    button.classList.add('highlighted');
}

//function to remove highlights from an array of buttons
function removeHighlights(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].classList.contains('highlighted')) {
            array[i].classList.remove('highlighted');
        }
    }
}

export {highlightButton, removeHighlights}