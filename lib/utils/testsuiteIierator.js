// Iterates over a test suite
// Context being a suite of n test numbers

import editJsonFile from "edit-json-file";
import _createcoveragereport from './createcoveragereport.js'
import _addtocoverage from './addtocoverage.js'

/**
 * Called as a iterator over a test suite's results 
 * returns a coverage object for a e2e object
 *
 * @name testsuiteiterator
 * @function
 * @param {Object} suite E2E Test Object The path to the JSON file.
 */

export default function testsuiteiterator(suite) {
// Object to store final report object
var coverageReport = {}

// To Iterate over all test results
const totalTests = suite.specs.length  
for (let index = 0; index < totalTests; index++){
    const testObj = suite.specs[index]
    var tempCoverageObj
	var testsLength = testObj.tests.length
    for( testsLength; testsLength >= 0; testsLength--) {
		let i = testsLength - 1 
        tempCoverageObj = _addtocoverage(testObj, i, totalTests - index)
        testsLength--
    }
	Object.assign(coverageReport,{...tempCoverageObj})
}
// Open an empty coverage results file
let file = editJsonFile(`./results.json`)
file.empty()
// Create the final coverage report
_createcoveragereport(coverageReport, file, suite.file)
return 0
}