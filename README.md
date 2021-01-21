## Install the dependencies

The project was written in NodeJS so in order to run it you need to install NodeJs on your machine.

You can have a look on NodeJS website to find the best way to install it on your machine 
[Download NodeJS](https://nodejs.org/en/download/).

Once you have Node installed all you need to do is run the command below on the root of the project:

```
npm i
```

That should install all the dependencies required to run the project.

## How to run the tests

The tests were written using Cypress so once you have installed all the dependencies on `/package.json` you can run the
tests with the commands below.

To run the tests on headed mode where you can see them running:
```
npx cypress run --spec "cypress/integration/studentRegistrationTests.spec.js" --headed // Electron headed
npx cypress run --spec "cypress/integration/studentRegistrationTests.spec.js" --browser chrome // Chrome headed
npx cypress run --spec "cypress/integration/studentRegistrationTests.spec.js" --browser firefox // Chrome headed
```

To run the tests on headless mode where you can't see them running:
```
npx cypress run --spec "cypress/integration/studentRegistrationTests.spec.js" // Electron headless
npx cypress run --spec "cypress/integration/studentRegistrationTests.spec.js" --browser chrome --headless // Chrome headless
npx cypress run --spec "cypress/integration/studentRegistrationTests.spec.js" --browser firefox --headless // Firefox headless
```

You can look at [Cypress Docs](https://docs.cypress.io/guides/guides/command-line.html#cypress-run-browser-lt-browser-name-or-path-gt)
for more info on supported browsers and how to change between them.