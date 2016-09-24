import { actions } from './actions';
import { keyboardFocus, shuffleArray } from './common';
import { preloader, card, btnToggleMute } from './dom';
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

export function render () {
    if (!store.getState().start) {
        return;
    }

    btnToggleMute.setAttribute('aria-hidden', false);
    btnToggleMute.setAttribute('aria-pressed', store.getState().muted);
    if (store.getState().muted) {
        btnToggleMute.classList.add('svg-toggled');
    }
    else {
        btnToggleMute.classList.remove('svg-toggled');
    }

    const index = store.getState().step;

    if (previousColorIndex === index) {
        return;
    }

    previousColorIndex = index;

    if (index > colorsLength - 1) {
        createNewSequence();
        store.dispatch(actions.stepReset());

        return;
    }

    const curr = store.getState().sequence[index];

    preloader.classList.add('is-hidden');
    card.innerHTML = curr;
    card.className = card.className.replace(/(card--\w+\s?)?/, `card--${curr.toLowerCase()} `);

    if (!store.getState().muted && !colors[curr].sample.error) {
        colors[curr].sample.play();
    }
}
