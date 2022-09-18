const fs = require('fs');
const path = require('path');
const findWorkspaceRoot = require('find-yarn-workspace-root');

const yarnRoot = findWorkspaceRoot() ?? process.cwd();

/**
 * @param {string} dependency
 */
function checkDependency(dependency) {
  try {
    require.resolve(dependency);
    return true;
  } catch {
    return false;
  }
}

function isMagneticDiInstalled() {
  return checkDependency('react-magnetic-di');
}

function isNxWorkspace() {
  return checkDependency('@nrwl/nx');
}

function getNxWorkspaceRoot() {
  if (!isNxWorkspace()) {
    return null;
  }

  try {
    require.resolve('@nrwl/devkit');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { workspaceRoot } = require('@nrwl/devkit');
    return workspaceRoot;
  } catch {
    if (!fs.existsSync(path.join(yarnRoot, 'workspace.json'))) {
      console.warn('Could not determine NX Workspace Root');
      return null;
    }

    return path.join(yarnRoot);
  }
}

function isReactInstalled() {
  return checkDependency('react');
}

function isReactHooksEslintInstalled() {
  return isReactInstalled() && checkDependency('eslint-plugin-react-hooks');
}

function isRepoStructureInstalled() {
  return checkDependency('eslint-plugin-repo-structure');
}

/**
 *
 * @param {string | string[] | undefined} existing
 * @param {string[]} newConfig
 */
function mergeArrays(existing, newConfig) {
  if (Array.isArray(existing)) {
    return existing.concat(newConfig);
  }

  if (!existing) {
    return newConfig;
  }

  return [existing].concat(newConfig);
}

module.exports = {
  getNxWorkspaceRoot,
  mergeArrays,
  isReactHooksEslintInstalled,
  isMagneticDiInstalled,
  isNxWorkspace,
  isReactInstalled,
  isRepoStructureInstalled,
};
