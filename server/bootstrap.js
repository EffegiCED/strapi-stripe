'use strict';

const path = require('path');
const fs = require('fs-extra');
const _ = require('lodash');

module.exports = async () => {

    const jsData = fs.readFileSync(path.resolve(__dirname, 'public', 'stripe.js'), 'utf8');
    const filledJsData = _.template(jsData)({
        backendUrl: strapi.config.server.url,
    });
    const extensionsPath = strapi.dirs.extensions || strapi.dirs.dist.extensions;
    const bbbJsPath = path.resolve(extensionsPath, 'strapi-stripe', 'public', 'stripe.js');

    setTimeout(async () => {
        strapi.log.debug('Strapi-Stripe assets try create at:' + bbbJsPath);

        await fs.ensureFile(bbbJsPath);
        await fs.writeFile(bbbJsPath, filledJsData);

        if (!fs.exists(bbbJsPath)) {
            strapi.log.error('Error not created!!! at:' + bbbJsPath);
        } else {
            strapi.log.debug('File created at:' + bbbJsPath);
        }
    }, 1000);
};
