import { combineReducers } from 'redux';
import { ACTION_TYPES } from './action-types';

export function sequence (state = [], action) {
    if (action.type === ACTION_TYPES.sequence) {
        return action.sequence;
    }

    return state;
}

export function step (state = 0, action) {
    if (action.type === ACTION_TYPES.step) {
        return state + 1;
    }
    else if (action.type === ACTION_TYPES.stepReset) {
        return 0;
    }

    return state;
}

export function muted (state = false, action) {
    if (action.type === ACTION_TYPES.toggleMute) {
        return !state;
    }

    return state;
}

export function start (state = false, action) {
    if (action.type === ACTION_TYPES.start) {
        return !state;
    }

    return state;
}

export const rootReducer = combineReducers({ sequence, step, muted, start });
