const rules = require('./rules');
const configs = require('./configs');

/**
 * @type {import('eslint').ESLint.Plugin}
 */

const eslintConfig = {
  configs,
  rules,
};

module.exports = eslintConfig;
