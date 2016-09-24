import { actions } from './actions';
import { store } from './store';

function initSample (data) {
    let sample = new Audio(data);

    sample.addEventListener('error', () => {
        store.dispatch(actions.step());
    });

    return sample;
}

export function loadAudio (colorName) {
    const url = 'assets/audio/' + colorName + '.m4a';

    if (typeof fetch !== 'undefined' && typeof FileReader !== 'undefined' && typeof localStorage !== 'undefined') {
        if (localStorage.getItem(colorName)) {
            return initSample(JSON.parse(localStorage.getItem(colorName)).src);
        }

        fetch(url).then((response) => {
            response.blob().then((blob) => {
                const reader = new FileReader ();

                reader.readAsDataURL(blob);
                reader.addEventListener('loadend', () => {
                    const base64Data = reader.result.toString();
                    const mediaFile = {
                        fileUrl: url,
                        size: blob.size,
                        type: blob.type,
                        src: base64Data
                    };

                    localStorage.setItem(colorName, JSON.stringify(mediaFile));

                    return initSample(base64Data);
                });
            });
        }).catch(() => initSample(url));
    }

    return initSample(url);
}
