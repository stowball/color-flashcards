'use strict';

const fs = require('fs');
const target = process.argv[2];

if (target) {
    let targetContents = fs.readFileSync(target, 'utf8');

    const injects = targetContents.match(/<inject type="\w+" src=".*?"><\/inject>/g) || [];

    targetContents = injects.reduce((content, inject) => {
        const src = inject.match(/src="(.*?)"/)[1];
        const type = inject.match(/type="(.*?)"/)[1];

        let srcContents = fs.readFileSync(src, 'utf8');

        if (type === 'style') {
            srcContents = '<style type="text/css">' + srcContents + '</style>';
        }
        else if (type === 'script') {
            srcContents = '<script>' + srcContents + '</script>';
        }
        else {
            return content;
        }

        return content.replace(inject, srcContents);
    }, targetContents);

    fs.writeFile(target, targetContents);
}
