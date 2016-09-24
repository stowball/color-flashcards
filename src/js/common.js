export function keyboardFocus (e) {
    if (e.keyCode !== 9) {
        return;
    }

    document.documentElement.classList.add('keyboard-focus');
    document.removeEventListener('keydown', keyboardFocus, false);
}

export function shuffleArray (arr) {
    let shuffledArray = arr.slice();
    let len = arr.length;
    let randomIndex;
    let tempValue;

    while (len) {
        randomIndex = Math.floor(Math.random() * len);
        len--;
        tempValue = shuffledArray[len];
        shuffledArray[len] = shuffledArray[randomIndex];
        shuffledArray[randomIndex] = tempValue;
    }

    return shuffledArray;
}
