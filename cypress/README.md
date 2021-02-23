# Why Cypress

Until now, end-to-end testing wasn’t easy. It was the part developers hated. Not anymore. Cypress makes setting up, writing, running and debugging tests easy. Cypress enables you to write all types of tests:

- End-to-end tests
- Integration tests
- Unit tests

Cypress can test anything that runs in a browser.

How it works [`https://www.cypress.io/how-it-works`](https://www.cypress.io/how-it-works)

How to start [`https://docs.cypress.io/guides/getting-started/writing-your-first-test.html`](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html)

## Run Cypress

`npm run cypress` and Cypress will open right up for you.

Don't forget to start local development server that hosts the application on localhost:3000.

You should see it in the list of spec files all spec files that are created. ![cypress spec files](/static/readme/cypress-list-spec.png)

Click on the specific spec file and watch Cypress open your browser. If you forgot to start your server you’ll see the error below: ![cypress no server](/static/readme/cypress-no-server.png)

If you’ve started your server, then you should see your application loaded and working.
