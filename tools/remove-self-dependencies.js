const {
  logger,
  readProjectConfiguration,
  readJsonFile,
  writeJsonFile,
} = require('@nrwl/devkit');
const { FsTree } = require('nx/src/generators/tree');
const fs = require('fs');
const path = require('path');

const { NX_CLI_SET, NX_WORKSPACE_ROOT, NX_TASK_TARGET_PROJECT } = process.env;

if (!NX_CLI_SET) {
  logger.error('Error: This script must only be run as an Nx executor');
  process.exit(1);
}

function toPath(...inputs) {
  return path.join(NX_WORKSPACE_ROOT, ...inputs);
}

function hasKey(obj, key) {
  return Object.keys(obj).includes(key);
}

const tree = new FsTree(NX_WORKSPACE_ROOT);

const projectConfig = readProjectConfiguration(tree, NX_TASK_TARGET_PROJECT);

if (!projectConfig.targets.prebuild) {
  logger.error('Error: Project does not contain a prebuild target');
  process.exit(1);
}

const outputs = projectConfig.targets.prebuild.outputs;
let output;
const SEARCH = '{options.';

if (outputs.length === 1 && outputs[0].startsWith('{options.')) {
  const key = outputs[0].substring(SEARCH.length, outputs[0].length - 1);
  output = toPath(
    path.join(projectConfig.targets.prebuild.options[key], 'package.json')
  );
} else {
  for (const outputPath of outputs) {
    const fullPath = toPath(outputPath);
    if (!fs.lstatSync(fullPath).isDirectory()) {
      if (outputPath.endsWith('package.json')) {
        output = fullPath;
        break;
      }
      continue;
    }
    const children = fs.readdirSync(fullPath);
    const packageJson = children.find(
      (child) =>
        !fs.lstatSync(path.join(fullPath, child)).isDirectory() &&
        child.endsWith('package.json')
    );

    if (packageJson) {
      output = path.join(fullPath, packageJson);
      break;
    }
  }
}

if (!output) {
  logger.error("Could not find the project's outputted package.json file");
  process.exit(1);
}

const packageJson = readJsonFile(output);

const { name, dependencies, devDependencies, peerDependencies } = packageJson;

if (dependencies && hasKey(dependencies, name)) {
  delete packageJson.dependencies[name];
}

if (devDependencies && hasKey(devDependencies, name)) {
  delete packageJson.devDependencies[name];
}

if (peerDependencies && hasKey(peerDependencies, name)) {
  delete packageJson.peerDependencies[name];
}

writeJsonFile(output, packageJson);
