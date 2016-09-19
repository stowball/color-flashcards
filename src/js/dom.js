let preloader = document.getElementsByClassName('preloader')[0];
let card = document.getElementsByClassName('card')[0];
let btnNextColor = document.getElementById('next-color');
let btnToggleMute = document.getElementById('toggle-mute');

btnNextColor.addEventListener('click', () => {
    store.dispatch(actions.colorIndex());
    store.dispatch(actions.prevColors());
});

btnToggleMute.addEventListener('click', () => {
    store.dispatch(actions.toggleMute());
});
