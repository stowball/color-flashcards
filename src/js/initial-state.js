import { shuffleArray } from './common';
import { loadAudio } from './load-audio';

export let colors = {
    Black: {},
    Blue: {},
    Brown: {},
    Gold: {},
    Gray: {},
    Green: {},
    Orange: {},
    Pink: {},
    Purple: {},
    Red: {},
    White: {},
    Yellow: {}
};

export const colorsKeysArray = Object.keys(colors);
export const colorsLength = colorsKeysArray.length;
export const initialState = {
    sequence: shuffleArray(colorsKeysArray),
    step: 0,
    muted: false,
    start: false
};

colorsKeysArray.forEach((color) => {
    colors[color].sample = loadAudio(color.toLowerCase());
});
