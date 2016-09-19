function colorIndex (state = 0, action) {
    if (action.type === ACTION_TYPES.colorIndex) {
        let index;

        do {
            index = randomize(colors, colorsLength);
        } while (store.getState().prevColors.indexOf(index) > -1);

        return index;
    }

    return state;
}

function playableSamples (state = 0, action) {
    if (action.type === ACTION_TYPES.incrementSamples) {
        return state + 1;
    }

    return state;
}

function prevColors (state = [], action) {
    if (action.type === ACTION_TYPES.prevColors) {
        let newState = [...state, store.getState().colorIndex];

        if (newState.length === Math.floor(colorsLength / 2) + 1) {
            newState.shift();
        }

        return newState;
    }

    return state;
}

function muted (state = false, action) {
    if (action.type === ACTION_TYPES.toggleMute) {
        return !state;
    }

    return state;
}

const rootReducer = Redux.combineReducers({ colorIndex, prevColors, playableSamples, muted });
