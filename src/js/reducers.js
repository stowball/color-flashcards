import { combineReducers } from 'redux';
import { ACTION_TYPES } from './action-types';
import { initialState} from './initial-state';

export function sequence (state = initialState, action) {
    if (action.type === ACTION_TYPES.sequence) {
        return action.sequence;
    }

    return state;
}

export function step (state = initialState, action) {
    if (action.type === ACTION_TYPES.step) {
        return state + 1;
    }
    else if (action.type === ACTION_TYPES.stepReset) {
        return 0;
    }

    return state;
}

export function mute (state = initialState, action) {
    if (action.type === ACTION_TYPES.toggleMute) {
        return !state;
    }

    return state;
}

export function delay (state = initialState, action) {
    if (action.type === ACTION_TYPES.toggleDelay) {
        return !state;
    }

    return state;
}

export function start (state = initialState, action) {
    if (action.type === ACTION_TYPES.start) {
        return !state;
    }

    return state;
}

export const rootReducer = combineReducers({ sequence, step, mute, delay, start });
