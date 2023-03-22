import _testsuiteiterator from './utils/testsuiteIierator.js'

/**
 * 1. Entry point for the playwright-e2e-report.
 * 
 * 2. The package converts e2e test results from 
 * playwright test report to coverage report for each test
 *  
 * @name createE2ECoverageReport
 * @function
 * @param {Object} resultsObj E2E Test Object The path to the JSON file.
 */


export function createE2ECoverageReport(resultsObj) {

  // Number of projects
  var numberOfProjects = resultsObj.config.projects.length

  // To iterate over test suites
  while (numberOfProjects > 0) {
    const suite = resultsObj.suites
    const projectDir = resultsObj.config.projects[numberOfProjects - 1].testDir
    _testsuiteiterator(suite, projectDir)
    numberOfProjects--
  }

  return 0
}