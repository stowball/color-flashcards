import { actions } from './actions';
import { store } from './store';

export let preloader = document.getElementById('preloader');
export let colorName = document.getElementById('color-name');
export let colorNameA11y = document.getElementById('color-name-a11y');
export let btnNextColor = document.getElementById('next-color');
export let btnToggleMute = document.getElementById('toggle-mute');
export let btnToggleDelay = document.getElementById('toggle-delay');
export let btnStart = document.getElementById('start');

btnNextColor.addEventListener('click', (e) => {
    e.preventDefault();
    store.dispatch(actions.step());
});

btnToggleMute.addEventListener('click', (e) => {
    e.preventDefault();
    store.dispatch(actions.toggleMute());
});

btnToggleDelay.addEventListener('click', (e) => {
    e.preventDefault();
    store.dispatch(actions.toggleDelay());
});

btnStart.addEventListener('click', (e) => {
    e.preventDefault();
    store.dispatch(actions.start());
});
