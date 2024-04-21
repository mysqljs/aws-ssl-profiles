[mysql]: https://github.com/mysqljs/mysql
[mysql2]: https://github.com/mysqljs/mysql
[docs-contributing]: https://sidorares.github.io/node-mysql2/docs/contributing/website

# Contributing Guidelines

## Introduction

Contributions are always welcomed. You can help **AWS SSL Profiles** community in various ways.
Here are our major priorities, listed in order of importance:

- [**mysqljs/mysql**][mysql], [**MySQL2**][mysql2] and [**node-postgres**](https://github.com/brianc/node-postgres) API incompatibility fixes
- Bug Fixes
- Adding tests or improving existing ones
- Documentation
- Performance improvements

---

## Environment

You will need these tools installed on your system:

- [**Node.js**](https://nodejs.org)

---

## Development

Fork this project, create a new branch from `main`, then run `npm ci` to clean install the node modules.

---

### Commits and Pull Request Titles

To ensure a clean commit history pattern, please use the [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/#summary) format.

Prefixes that will trigger a new release version:

- `fix:` for patches, e.g., bug fixes that result in a patch version release.
- `feat:` for new features, e.g., additions that result in a minor version release.
  - It's better to discuss an API before actually start implementing it. You can open an issue on **Github**. We can discuss design of API and implementation ideas.

Examples:

- `fix: message`
- `fix(scope): message`
- `docs: message`
- etc.

---

### Including Tests

#### Fixes

Where possible, provide an error test case that your fix covers.

#### Features

Please ensure test cases to cover your features.

---

### Running Tests

```sh
npm run test
```

You can also run all the tests that will be executed in the CI, such as _build_, _lint_, etc., by running:

```sh
npm run test:ci
```

> [!Tip]
> You can also run a single test by performing `npx tsx test/path-to-test-file.test.ts` to debug easily.
