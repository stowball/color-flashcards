function keyboardFocus (e) {
    if (e.keyCode !== 9) {
        return;
    }

    document.documentElement.classList.add('keyboard-focus');
    document.removeEventListener('keydown', keyboardFocus, false);
}

document.addEventListener('keydown', keyboardFocus, false);

function randomize (arr, arrLength) {
    const len = arrLength || arr.length

    return Math.floor(Math.random() * ((len - 1) + 1));
}
