const { isMagneticDiInstalled } = require('../utils');

/**
 * @typedef {Object<string, import('eslint').Rule.RuleModule>} EslintRules
 */

/**
 * @type {EslintRules}
 */
const rules = {};

if (isMagneticDiInstalled()) {
  /**
   * @type {EslintRules}
   */
  const magneticDiRules = require('react-magnetic-di/eslint-plugin').rules;

  Object.assign(rules, magneticDiRules);
}

module.exports = rules;
