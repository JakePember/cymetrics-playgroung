Table of Contents
---------------------

* [Introduction](#introduction)
* [Execution](#execution)
* [Points Of Interests](#points-of-interests)
* [Maintainers](#maintainers)

INTRODUCTION
------------

Cymetrics-playground is a repository with everything needed to see how cymetrics works and play
with any of the settings. This playground already comes with pre-made tests to simulate a variety
of scenarios, such as always passing tests, always failing ones, and even pesky flaky tests.

Check out cymetrics' [GitHub](https://github.com/JakePember/cymetrics) or [NPM](https://www.npmjs.com/package/cymetrics)
page for a better understanding of the package.

Execution
---------
When you first download the repository to your local, open a terminal within the project root and run `npm install`. This
will install all dependencies needed, including cymetrics.

Once dependencies are installed, run `npm run test`.

After the tests are done running, output of cymetrics can be found at `PROJECT_ROOT/output/`

POINTS OF INTERESTS
-------------------
In this section we will go over some key code locations for cymetrics.

### package.json Scripts
The `cypress/package.json` file contains a series of scripts used by cymetrics and mochawesome reporting.

`test`: Runs all tests found within `cypress/integration` folder

`clean-reports`: Removes anything under the `cypress/reports/` folder. This script is

`posttest`: Runs the `mocha-merge` script, then the `mocha-marge` script

`mocha-merge`: Combines all json files generated within the `cypress/reports/testCaseResults/` folder into one
json file located at `cypress/reports/mochawesomeMerged.json`

`moca-marge`: (OPTIONAL) - Takes the combined `mochawesomeMerged.json` file and generates
a html file that you can open up within a web browser. This is not needed for cymetrics, however
is a great way to create a visual report of the last run.

### index.js
The `cypress/plugins/index.js` file is where plugin configurations can be used and modified. Cymetrics uses the
[Before Run](https://docs.cypress.io/api/plugins/before-run-api) and the
[After Run](https://docs.cypress.io/api/plugins/after-run-api) APIs.
  - The **Before Block** will execute before any tests begin. This is a great time to run the `clean-reports` script
that ensures a clean workspace for cymetrics.
  - The **After Block** will execute after all tests conclude. This is the time to first compress all the json data into
a sigular json (`posttest` script). Then call cymetrics to consume the compressed json file.

### cypress.json
The `cypress/cypress.json` file is a location where configuration values can be supplied.

The below settings are used to generate the mochawesome json files. This will essentially be used to generate the input
for cymetrics.
```json
{
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports/testCaseResults",
    "overwrite": false,
    "html": false,
    "json": true
  }
}
```

The below settings are used to configure cymetrics. See the [Options sections](https://github.com/JakePember/cymetrics#options)
within the cymetrics documentation for descriptions of each property.
```json
{
  "load_balancer": {
    "outputDirectory": "output",
    "testCaseOutputFileName": "tcDataOutput",
    "fileOutputFileName": "fileDataOutput",
    "balancedFilesOutputFileName": "balancedFiles",
    "balancedTcOutputFileName": "balancedTestCases",
    "testRunnerCount": "2",
    "mochawesomeReport": "cypress/reports/mochawesomeMerged.json"
  }
}
```

MAINTAINERS
-----------
[Jacob Bles](https://github.com/JakePember)
