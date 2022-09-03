import type { ESLint } from 'eslint';
import { workspaceRoot } from '@nrwl/devkit';
import { isMagneticDiInstalled } from './utils';

const nxConfig: ESLint.ConfigData = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
        '@typescript-eslint/consistent-generic-constructors': 'error',
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
        ],
      },
      parserOptions: {
        tsconfigRootDir: workspaceRoot,
        project: [
          './tsconfig.base.json',
          './tools/tsconfig.*.json',
          './packages/**/tsconfig.*.json',
        ],
      },
    },
  ],
};

if (isMagneticDiInstalled()) {
  nxConfig.rules = {
    '@tsi/order': 'error',
    '@tsi/no-duplicate': 'error',
    '@tsi/no-extraneous': 'error',
    '@tsi/exhaustive-inject': 'error',
    '@tsi/sort-dependencies': 'error',
  };
}

const configs: Record<string, ESLint.ConfigData> = {
  nx: nxConfig,
};

export default configs;
