const {
  isMagneticDiInstalled,
  isNxWorkspace,
  getNxWorkspaceRoot,
  isReactInstalled,
  isReactHooksEslintInstalled,
  mergeArrays,
  isRepoStructureInstalled,
} = require('./utils');

/**
 * @typedef {import('eslint').ESLint.ConfigData} ConfigData
 */

/**
 * @type {ConfigData}
 */
const baseConfig = {
  rules: {
    'capitalized-comments': 'error',
  },
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
      },
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json'],
      },
    },
  ],
};

if (isRepoStructureInstalled()) {
  baseConfig.plugins = mergeArrays(baseConfig.plugins, ['repo-structure']);
  baseConfig.rules = {
    ...baseConfig.rules,
    'repo-structure/file-structure': 'error',
  };
  baseConfig.settings = {
    ...baseConfig.settings,
    'repo-structure/config-path': '.structurerc',
  };
}

if (isMagneticDiInstalled()) {
  baseConfig.rules = {
    ...baseConfig.rules,
    '@tsi/order': 'error',
    '@tsi/no-duplicate': 'error',
    '@tsi/no-extraneous': 'error',
    '@tsi/exhaustive-inject': 'error',
    '@tsi/sort-dependencies': 'error',
  };
}

// NX Workspace already has these plugins
if (!isNxWorkspace()) {
  if (isReactInstalled()) {
    if (isReactHooksEslintInstalled()) {
      baseConfig.extends = mergeArrays(baseConfig.extends, [
        'plugin:react-hooks/recommended',
      ]);
      baseConfig.plugins = mergeArrays(baseConfig.plugins, ['react-hooks']);
    }
  }
}

if (isNxWorkspace()) {
  const workspaceRoot = getNxWorkspaceRoot();

  if (workspaceRoot) {
    baseConfig.overrides[0].parserOptions = {
      tsconfigRootDir: workspaceRoot,
      project: [
        './tsconfig.base.json',
        './tools/tsconfig.*.json',
        './packages/**/tsconfig.*.json',
        './apps/**/tsconfig.*.json',
        './libs/**/tsconfig.*.json',
      ],
    };
  }
}
/**
 * @type {Object<string, ConfigData>}
 */
const configs = {
  config: baseConfig,
};

module.exports = configs;
