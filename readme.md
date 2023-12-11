# Web Automation Framework for demo.realworld.io website.


Automation framework for [https://demo.realworld.io/](https://demo.realworld.io/).

## Reports

HTML Reporting system is hosted at [Github Pages](https://shiro-san-ua.github.io/CypressIntro/html/index.html).

## Technologies Stack

-   [Node.js](https://nodejs.org/en/)
-   [Cypress Framework](https://www.cypress.io/) - testing framework for modern web apps.
-   [Faker](https://fakerjs.dev/guide/) - brary that generates fake (but reasonable) data.
-   [Prettier](https://prettier.io/) - code formatter.
-   [mochawesome](https://github.com/LironEr/cypress-mochawesome-reporter) - html reporter.

## Setup

### Installation

1.  Install Node.js.
1.  Run `git clone https://github.com/SHIRO-SAN-UA/CypressIntro` to clone repository.
1.  Run `npm i` to install dependencies.

### How to run tests


1.  Headed `npx cypress open`.
1.  Headless `npx cypress run`.
1.  Run `cypress open --config-file cypress.1024.config.js` to run with 1024x768 resolution configuration


### Structure

-   `cypress.config.js` main config file.
-   `e2e` folder with tests
-   `pages` - forder with pages

### Standards

All test cases should be coded inside the `e2e` folder.
Project build using [Page Object Model](https://playwright.dev/docs/pom). The main idea is to encapsulate logic into page classes and use the logic in the spec files to run the tests.

For instance we define the class LoginPage with locators and elements and reuse them in the code.
