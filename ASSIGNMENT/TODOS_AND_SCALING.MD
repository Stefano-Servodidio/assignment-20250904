# To-do's and scaling

## TO-do's
There are a few things that are missing from the project before going live.

### 1. Complete Unit Tests
Unit Tests are not mission-critical, but are a great tool for documentation and QA. 80% coverage on the whole application is a requirement for go-live.

### 2. Test Accessibility
Could not test accessibility on the final delivery. A11y **is** mission-critical, hence testing that the app meets ISO WCAG 2.0 or better is mandatory (that said, I am confident that Chakra UI has it mostly sorted out already).  

### 3. add a Pre-commit hook
I integrate a pre-commit hook in all my projects to run linting, formatting and tests automatically on all staged files (usually I use Husky with lint-staged). This is a good failsafe for faulty local setups or weird corner cases with git.

## Scaling
I am confident that the current file structure is well setup to support reasonable horizontal scaling (e.g. more pages). If significant vertical scaling is required, the project can be reorganized for modularity.

This said, there is a strong argument for integrating a React framework as soon as the feature-creep gets intensed. I would personally recommend Next.js since SSR is a very natural direction to follow for cached apps and API routes can help masking and add security to the public API integration.