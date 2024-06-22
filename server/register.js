/* eslint-disable node/no-extraneous-require */
/* eslint-disable node/no-missing-require */
'use strict';

const path = require('path');
const fs = require('fs-extra');
const _ = require('lodash');

const staticFileMiddleware = require('./middlewares/staticFiles');

module.exports = async ({ strapi }) => {
  // registeration phase
  console.log('Registering Strapi Stripe plugin...');
  await staticFileMiddleware({ strapi });
}
