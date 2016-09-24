import { ACTION_TYPES } from './action-types';

export const actions = {
    sequence: (sequence) => {
        return {
            type: ACTION_TYPES.sequence,
            sequence
        };
    },
    step: () => {
        return {
            type: ACTION_TYPES.step
        };
    },
    stepReset: () => {
        return {
            type: ACTION_TYPES.stepReset
        };
    },
    toggleMute: () => {
        return {
            type: ACTION_TYPES.toggleMute
        };
    },
    start: () => {
        return {
            type: ACTION_TYPES.start
        };
    }
};
