# TGL-Application

## Tech stack

- [Angular CLI][cli]
- [NodeJS][nodejs]
- UI modules:
  - [AngularMaterial][angular-material]
  - [Flex-Layout][angular-flex-layout]
- [AWS Amplify][aws-amplify]
- Tests:
  - [Cypress][cypress]
  - [Karma][karma]

[cli]: https://cli.angular.io/
[nodejs]: https://nodejs.org/
[angular-material]: https://material.angular.io/
[angular-flex-layout]: https://github.com/angular/flex-layout/
[aws-amplify]: https://aws.amazon.com/amplify/
[cypress]: https://www.cypress.io/
[karma]: https://karma-runner.github.io/latest/index.html

## Getting Started --DEVELOPMENT

1. `git clone ... && cd TGL-app`
2. Run the following commands at the root of the folder (requires Node.js):
   - `npm install`
   - `npm install -g @angular/cli`
   - `ng serve`

3. Navigate to <http://localhost:4200> in your browser to view the site.

## Frontend test

1. Navigate to the root folder: `TGL-app` in a console window.
2. Run the following commands at the root of the folder (requires Node.js):

   - Test components: `npm run test`
   - Test UI End-to-End with cypress: `npm run e2e`

## Getting Started --PRODUCTION
