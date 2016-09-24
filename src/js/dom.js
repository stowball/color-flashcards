import { actions } from './actions';
import { store } from './store';

export let preloader = document.getElementById('preloader');
export let card = document.getElementsByClassName('card')[0];
export let btnNextColor = document.getElementById('next-color');
export let btnToggleMute = document.getElementById('toggle-mute');
export let btnStart = document.getElementById('start');

btnNextColor.addEventListener('click', (e) => {
    e.preventDefault();
    store.dispatch(actions.step());
});

btnToggleMute.addEventListener('click', (e) => {
    e.preventDefault();
    store.dispatch(actions.toggleMute());
});

btnStart.addEventListener('click', (e) => {
    e.preventDefault();
    store.dispatch(actions.start());
});
