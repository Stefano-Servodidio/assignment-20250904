# Solution Documentation

## Introduction
This document outlines the approach and decisions made during the development of the Sport Leagues assignment project. The goal was to build a modern, maintainable, and user-friendly web application for browsing sports leagues, leveraging React, Chakra UI, and several supporting libraries.

I approached this task assuming that the requirements outline the complete scope of the first version of our application, and chose tools and made decisions accordingly.

My goal was to deliver an application that is scope-appropriate and as ready for deployment as possible.

## How it went
I have completed all the tasks in the assignment in the requested time. I went a little overboard with final touches, since I did not like to leave things unfinished and I am too precise for my own good.

## AI Usage: Bolt and Copilot
Throughout the project, AI tools played a significant role in accelerating development and improving code quality:
- **GitHub Copilot** was used for code completion, refactoring suggestions, and generating boilerplate for React components, hooks, and context providers. It helped streamline repetitive tasks and provided best-practice patterns for modern React development.
- **Bolt** was utilized for setting up the project boilerplate with the desired structure and dependencies.

See the images in `/ASSIGNMENT/screenshots` for examples on how I used these tools during in the assignment.

## Boilerplate
I opted for a simple React 18 scaffolding with vite for bundling and Chakra Ui as the core UI library. I normally refrain from using plain React for my applications, but in this case I think that this approach is appropriate for the scope of the task and the projected scalability of the project. The application is clean, lightweight and without unnecessary dependencies.

## Folder Structure
I opted for a "by type/role" structure over a "by feature" structure. A small application with light components does not have to deal with bundling issues, hence there's no need to have a setup for code-splitting. Organizing folders by file type is intuitive and easy to mantain.

## Layout
I barely had any time to work on the layout for this assignment. Bolt provided me with good jsx, I would liked to include a custom theme, but alas, no time. Going for a grid seemed the best option, seen how the contents looked.

## Dependencies
Below is a summary of the main decision points on the dependencies I chose to use:

### Chakra UI
Chakra UI was used for layout, styling, and interactive components such as buttons, popovers, and cards.
I am a big proponent of CSS-in-JS in React, and Chakra Ui is a very solid one-stop solution to handle layout, theming and behaviour in a very readable and customizable way.

### Axios
Axios was used to fetch data from TheSportsDB API, with caching support via `axios-cache-interceptor`.
I chose Axios over Fetch API (witch comes built-in with React) because I appreciate its clean syntax, flexibility and strong ecosystem of plugins.

### axios-cache-interceptor
Since we are querying a third-party API, front-end caching seemed like the obvious solution.

### Vite
Vite is the build tool that came with the bolt.new template. I usually use Webpack or Rollup for my project, but I was happy enough to try this one out since it came with its native test integration via Vitest, which is a great plus.

### TypeScript
Typescript is mandatory on all React projects. Full stop.

### Vitest
Vitest was used to write and run tests for components and utility functions.
As I said for Vite, Vitest came with the boilerplate and was happy to keep it since the syntax is very comparable to Jest and I really appreciated the run speed.

### ESLint & Prettier
A linter and a formatter are mandatory on all React projects. Full stop.
...
Bold statements aside, this dynamic duo has been with me since the beginning and has saved me a MOUNTAIN of headhaches over the years. Easy to configure, easy to setup and integrate in the IDE workflow, these tools can provide a huge boost to code quality for a minimum investment of time.

## Other decision points

### Context API over Redux, Mobx and other state management dependencies
Context API is a often overlooked tool in vanilla React's arsenal. Normally I do not recommend to use it as a global state manager, since I find it to be more useful to isolate module/component state declaratively. In this case, the scope of the application was simple enough that I could not justify the package space for a dedicated library, so I was happy enought to use Context.

### Custom Hooks
I absolutely wanted to include custom hooks in the project. I find these to be an incredible piece of kit that allow you to make stateful logic readily available at any level of your application.

---
This documentation provides an overview of the solution, the role of AI tools, and the dependencies that supported the development process.
