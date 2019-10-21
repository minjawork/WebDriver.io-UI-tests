Login Tests
=========================

**Precondition**
In order to use webdriver.io framework, install node version ( at least node 10).
Node version can be checked using command: `node -v`

 **General**

When cloning repo, please run **npm install** inside root directory folder.
All test scripts should be placed in `./test` folder or subdirectories.

**Run e2e test scripts**

1. In order to run tests, use next command in root directory:

    `npm test`

2. In order to run tests in specific browser run next command in root directory:

    `browserName=chrome npm test`

3. Test report is placed under folder timeline-reports. File name is: `timeline-report.html`
