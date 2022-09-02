<a href="https://gitlab.com/tsi-libs/the-simply-initiative">
  <img src="images/logo.png" alt="Logo">
</a>

# @thesimplyinitiative

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

**Monorepo containing useful tools, plugins, and libraries. Created by the team, made for the community.**

## Installation and Usage

This project is structured as a monorepo. If you don't know what a monorepo is, you can learn more about it [here](https://www.atlassian.com/git/tutorials/monorepos).

Installation guides vary by package. Each package has its own README.md file you can refer to for installation and usage instructions. Preferably, head over to the [docs](https://docs.thesimplyinitiative.com.au) to learn more about each package.

### Plug and Play

The monorepo uses Yarn Berry with Plug n Play (PnP). It doesn't have a `node_modules` directory, nor does it require one. You can learn more about Yarn Berry [here](https://yarnpkg.com/getting-started/migration).

## Monorepo Commands

This package uses `yarn workspaces`. You can learn more about workspaces [here](https://yarnpkg.com/features/workspaces).

**The following commands are available in this Monorepo:**

### Misc

```sh
yarn move [destination] [options,...] # Move a project to another folder in the workspace.
yarn rm [projectName] [options,...] # Remove a project from the workspace.

```

### Typescript/Javascript

```sh
yarn gen:lib [name] [options,...] # Create a TypeScript Library. Use --js to create a JavaScript library instead
```

### React

```sh
yarn gen:library [name] [options,...] # Create a React Library for an Nx workspace.
yarn gen:component [name] [options,...] # Create a React Component for an Nx workspace.
yarn gen:hook [name] [options,...] # Create a React Hook or an Nx workspace.
```

### Storybook

```sh
yarn gen:story-conf [name] [options,...] # Set up Storybook for a React app or library.
yarn gen:comp-story [options,...] # Generate storybook story for a react component.
yarn gen:stories [options,...] # Generate stories/specs for all components declared in a project.
```

### Cypress

```sh
yarn gen:comp-story-spec [options,...] # Create a Cypress spec for a UI component that has a story.
yarn gen:cypress-conf [options,...] # Add a Cypress component testing configuration to an existing project.
yarn gen:comp-spec [options,...] # Add a Cypress component test for a component.
```

### Nx-Plugin

```sh
yarn gen:plugin [name] [options,...] # Create a Plugin for Nx.
yarn gen:migration [name] [options,...] # Create a Migration for an Nx Plugin.
yarn gen:generator [name] [options,...] # Create a Generator for an Nx Plugin.
yarn gen:executor [name] [options,...] # Create an Executor for an Nx Plugin.
```

Run any of the above commands followed by `--help` to get information on the options and usage of the command

**Example:**

```sh
yarn gen:library --help
```

## Contributing

To contribute to this library, please refer to the [CONTRIBUTING.md](./CONTRIBUTING.md) file. Also, don't forget to checkout our [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)

_This project was generated using [Nx](https://nx.dev)._
