require("cypress-plugin-retries");
Cypress.Screenshot.defaults({
  screenshotOnRunFailure: false,
});

beforeEach(() => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});

import "./commands";
