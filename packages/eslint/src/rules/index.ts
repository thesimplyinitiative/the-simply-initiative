import type { Rule } from 'eslint';
import { isMagneticDiInstalled } from '../utils';

const rules: Record<string, Rule.RuleModule> = {};

if (isMagneticDiInstalled()) {
  const magneticDiRules: Record<
    string,
    Rule.RuleModule
    // eslint-disable-next-line @typescript-eslint/no-var-requires
  > = require('react-magnetic-di');

  Object.assign(rules, magneticDiRules);
}

export default rules;
