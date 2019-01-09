# adp

# Installation
After cloning `npm install` to install necessary dependencies.

# Getting started
`npm start` to run the application. We make calls to the given API every 100 ms to get results and submit them for evaluation. Successful calls will log a success message including the ID and result of the given call.

# Testing/Linting
`npm test` to run tests. *Note* before running, please comment out lines 64-71 in `index.js` as not doing so will interfere with Nock calls in testing.

For linting please run `npm run lint`. Linting rules uses standard Airbnb rules.
