const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs')

jsdoc2md.render({
    files: [
        'templates/component/*.js',
        'templates/core/*.js',
        'templates/docs.js',
        'templates/strings.js',
        'templates/languages/*.js',
        'bin/**/*.js'
    ]
}).then((readme) => fs.writeFile('README.md', readme));