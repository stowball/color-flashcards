let colors = [
    {
        label: 'Black'
    },
    {
        label: 'Blue'
    },
    {
        label: 'Brown'
    },
    {
        label: 'Gold'
    },
    {
        label: 'Gray'
    },
    {
        label: 'Green'
    },
    {
        label: 'Orange'
    },
    {
        label: 'Pink'
    },
    {
        label: 'Purple'
    },
    {
        label: 'Red'
    },
    {
        label: 'White'
    },
    {
        label: 'Yellow'
    }
];

const colorsLength = colors.length;

const initialRandomIndex = randomize(colors, colorsLength);

const initialState = {
    colorIndex: initialRandomIndex,
    prevColors: [initialRandomIndex],
    playableSamples: 0,
    muted: false
};
