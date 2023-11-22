# Web Automation Framework for www.redmine.org website.


Automation framework for [https://demo.realworld.io/](https://demo.realworld.io/).

## Reports

HTML Reporting system is hosted at [Github Pages] (!!!).

## Technologies Stack

-   [Node.js](https://nodejs.org/en/)
-   [Cypress Framework](https://www.cypress.io/) - testing framework for modern web apps.
-   [Faker](https://fakerjs.dev/guide/) - brary that generates fake (but reasonable) data.
-   [Prettier](https://prettier.io/) - code formatter.

## Setup

### Installation

1.  Install Node.js.
1.  Run `git clone https://github.com/SHIRO-SAN-UA/CypressIntro` to clone repository.
1.  Run `npm install cypress --save-dev` to install Cypress and dependencies.
1.  Run `npm install @faker-js/faker --save-dev` to install Faker and dependencies.

### How to run tests


1.  Headed `npx cypress open`.
1.  Headless `npx cypress run`.


### Structure

-   `cypress.config.js` config file.
-   `e2e` folder with tests
-   `pages` - forder with pages

### Standards

All test cases should be coded inside the `e2e` folder.
Project build using. The main idea is to encapsulate logic into page classes and use the logic in the spec files to run the tests.

For instance we define the class LoginPage with locators and elements and reuse them in the code.