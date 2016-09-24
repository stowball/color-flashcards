const fs = require('fs-extra')

fs.ensureDirSync('docs');

fs.copy('src/assets', 'docs/assets', (err) => {
    if (err) {
        return console.error(err);
    }
});
