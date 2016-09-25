import { actions } from './actions';
import { keyboardFocus, shuffleArray } from './common';
import { preloader, colorName, colorNameA11y, btnNextColor, btnToggleMute, btnToggleDelay } from './dom';
import { colors, colorsKeysArray, colorsLength } from './initial-state';
import { store } from './store';

document.addEventListener('keydown', keyboardFocus, false);

function createNewSequence () {
    let arr = shuffleArray(colorsKeysArray);

    if (arr[0] === store.getState().sequence[colorsLength - 1]) {
        arr = [...arr.slice(1), store.getState().sequence[colorsLength - 1]];
    }

    store.dispatch(actions.sequence(arr));
}

let previousColorIndex;
let delayTimer;

function setToggleStates () {
    btnToggleMute.setAttribute('aria-pressed', store.getState().mute);
    if (store.getState().mute) {
        btnToggleMute.classList.add('svg-toggled');
        clearInterval(delayTimer);
    }
    else {
        btnToggleMute.classList.remove('svg-toggled');
    }

    btnToggleDelay.setAttribute('aria-pressed', store.getState().delay);
    if (store.getState().delay) {
        btnToggleDelay.classList.add('svg-toggled');
    }
    else {
        btnToggleDelay.classList.remove('svg-toggled');
    }
}

export function render () {
    if (!store.getState().start) {
        return;
    }

    btnNextColor.setAttribute('aria-hidden', false);

    setToggleStates();

    const index = store.getState().step;

    if (previousColorIndex === index) {
        return;
    }

    previousColorIndex = index;
    clearInterval(delayTimer);

    if (index > colorsLength - 1) {
        createNewSequence();
        store.dispatch(actions.stepReset());

        return;
    }

    const curr = store.getState().sequence[index];

    preloader.classList.add('is-hidden');
    colorName.innerHTML = curr;
    colorName.className = colorName.className.replace(/(card--\w+\s?)?/, `card--${curr.toLowerCase()} `);

    delayTimer = setTimeout(() => {
        colorNameA11y.innerHTML = curr;

        if (!store.getState().mute && !colors[curr].sample.error) {
            colors[curr].sample.play();
        }
    }, store.getState().delay ? 2500 : 0);
}
