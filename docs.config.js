const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

module.exports = {
    src: 'docs/src',
    dist: 'dist/public/docs',
    pug: {
        locals: {
            name: packageJson.name,
            version: packageJson.version,
            packageJson,
            pages: {
                index: {
                    text: packageJson.name + ' - ' + packageJson.version,
                    title: packageJson.name + ' - ' + packageJson.version,
                    toc: true
                },
                guide: {
                    text: 'Installation guide',
                    title: 'Installation guide',
                    npm: {name: packageJson.name, version: packageJson.version}
                },
                readme: {
                    text: 'Readme',
                    title: 'Readme',
                    toc: true
                },
                api: {
                    text: 'API docs',
                    title: 'API docs',
                    href: 'api/index.html'
                },
                source: {
                    text: 'Source code',
                    title: 'Source code',
                    href: packageJson.repository.url
                }
            }
        }
    }
};
