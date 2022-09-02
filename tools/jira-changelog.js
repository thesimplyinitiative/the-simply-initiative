const custom = require('@digitalroute/cz-conventional-changelog-for-jira/configurable');
const defaultOptions = require('@digitalroute/cz-conventional-changelog-for-jira/defaults');

const { FsTree } = require('nx/src/generators/tree');
const { findWorkspaceRoot } = require('nx/src/utils/find-workspace-root');
const { getProjects } = require('@nrwl/devkit');

const options = defaultOptions;

const root = findWorkspaceRoot(process.cwd());

const nxRoot = root.dir || process.cwd();

const tree = new FsTree(nxRoot);

const scopes = ['root', ...getProjects(tree).keys()];

options.scopes = scopes;
options.customScope = false;
options.skipScope = false;
options.jiraPrepend = '[';
options.jiraAppend = ']';
options.jiraOptional = true;
options.maxHeaderWidth = 100;

module.exports = custom(options);
