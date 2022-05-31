const glob = require('glob');

const htmlList = glob
    .sync('**/*.html', {
        cwd: './_assets/_htdocs',
    });

module.exports = htmlList; 