const fs = require('fs'),
    path = require('path'),
    templatePath = path.join(__dirname, '/../templates'),
    gulp = require('gulp'),
    replace = require('gulp-replace'),
    rename = require('gulp-rename'),
    packageName = require(`${process.cwd()}/package.json`).name.replace('@helio/', '');

const processName = (name) => {
    return name.replace(/([a-zA-z])[_|\.]+([a-zA-Z])/g, '$1-$2')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/([A-Z]{1,})([A-Z]{1})/g, '$1-$2')
        .toLowerCase();
};

let className = packageName.charAt(0)
    .toUpperCase() + packageName.slice(1);

function componentFile(cb, componentName) {
    className = componentName || className;

    const classToLower = processName(className);
    const classNameCapitalized = className.replace(/\b./g, m => m.toUpperCase())
        .replace(/-/g, '');
    const classNameCamelCase = classNameCapitalized.charAt(0)
        .toLowerCase() + classNameCapitalized.slice(1);
    const componentPath = `src/components/${classToLower}`;

    gulp.src([`${templatePath}/component/component.js`])
        .pipe(replace('component-name', classToLower))
        .pipe(replace(/ComponentName/gm, `${classNameCapitalized}`))
        .pipe(replace('this.componentName()', `this.${classNameCamelCase}()`))
        .pipe(rename(`${classToLower}.js`))
        .pipe(gulp.dest(`${componentPath}`));

    gulp.src([`${templatePath}/component/component.test.js`])
        .pipe(replace(/ComponentName/gm, `${classNameCapitalized}`))
        .pipe(replace(/componentName/gm, `${classNameCamelCase}`))
        .pipe(replace(/\.\/component-name\.js/gm, `./${classToLower}.js`))
        .pipe(replace(/component\-name/gmi, `${classToLower}`))   
        .pipe(rename(`${classToLower}.test.js`))
        .pipe(gulp.dest(`${componentPath}`));

    gulp.src([`${templatePath}/component/component.html`])
        .pipe(rename(`${classToLower}.html`))
        .pipe(gulp.dest(`${componentPath}`));

    gulp.src([`${templatePath}/component/demo-item.html`])
        .pipe(gulp.dest(`${componentPath}`));

    gulp.src([`${templatePath}/component/style.scss`])
        .pipe(rename(`${classToLower}.scss`))
        .pipe(replace('component {', `${classToLower} {`))
        .pipe(gulp.dest(`${componentPath}`));

    gulp.src([`${templatePath}/jsdoc.json`])
        .pipe(rename('jsdoc.json'))
        .pipe(gulp.dest(`src/`));

    if (!fs.existsSync(`src/core/${packageName}.js`)) {
        gulp.src([`${templatePath}/core/entry.js`])
            .pipe(replace(/component\-name/gmi, `${classToLower}`))
            .pipe(rename(`${packageName}.js`))
            .pipe(gulp.dest(`src/core/`));
    }

    if (!fs.existsSync('src/index.html')) {
        gulp.src([`${templatePath}/index.html`])
            .pipe(replace(/component\-name/gmi, `${classToLower}`))            
            .pipe(gulp.dest(`src/`));
    }

    if (!fs.existsSync('src/strings.js')) {
        gulp.src([`${templatePath}/strings.js`])       
            .pipe(gulp.dest(`src/`));
    }

    if (!fs.existsSync('src/languages/en_US.js')) {
        gulp.src([`${templatePath}/languages/en_US.js`])
            .on('end', cb)         
            .pipe(gulp.dest(`src/languages/`));
    }
}

module.exports = componentFile;
