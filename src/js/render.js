const store = Redux.createStore(rootReducer, initialState);

setTimeout(() => {
    colors = colors.map((color) => {
        color.sample = new Audio('/audio/' + color.label.toLowerCase() + '.m4a');

        color.sample.addEventListener('canplay', () => {
            store.dispatch(actions.incrementSamples());
        });

        return color;
    });
}, 1000);

const FALLBACK_DURATION = 5000;
let canFallback = false;

let fallBackTimer = setTimeout(() => {
    canFallback = true;
    clearTimeout(fallBackTimer);

    if (store.getState().playableSamples < colorsLength) {
        render();
    }
}, FALLBACK_DURATION);

function render () {
    if (canFallback || store.getState().playableSamples === colorsLength) {
        const index = store.getState().colorIndex;
        const curr = colors[index];

        preloader.classList.add('is-hidden');

        card.innerHTML = curr.label;
        card.className = card.className.replace(/(card--\w+\s?)?/, `card--${curr.label.toLowerCase()} `);

        btnToggleMute.setAttribute('aria-label', store.getState().muted ? 'Un-mute' : 'Mute');
        btnToggleMute.setAttribute('aria-hidden', false);
        btnToggleMute.classList.toggle('svg-toggled', store.getState().muted);

        if (!store.getState().muted && !colors[index].sample.error) {
            colors[index].sample.play();
        }
    }
}

store.subscribe(render);
