import type { ESLint } from 'eslint';
import configs from './config';
import rules from './rules';

const eslintConfig: ESLint.Plugin = {
  configs,
  rules,
};

export default eslintConfig;
