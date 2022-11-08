import _testsuiteiterator  from './utils/testsuiteIierator.js'

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


export function createE2ECoverageReport (resultsObj) {

// Target of conversion
	const testSuites = resultsObj.suites

// Number of test suites executed
	var numberOfTestSuites = testSuites.length

// Run the coverage report conversion for each test suite
	while(numberOfTestSuites > 0){
		const suite = testSuites[numberOfTestSuites - 1]
		_testsuiteiterator(suite)
		numberOfTestSuites--
	}

return 0
}