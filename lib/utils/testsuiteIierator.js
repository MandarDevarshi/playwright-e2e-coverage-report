// Iterates over a test suite
// Context being a suite of n test numbers

import _createcoveragereport from './createcoveragereport.js'
import _addfunctionnode from './addfunctionnode.js'
import _addbranchnode from './addbranchnode.js'
import _addstatementnode from './addstatementnode.js'

/**
 * Called as a iterator over a test suite's results 
 *
 * @name testsuiteiterator
 * @function
 * @param {Object} suite E2E data object from report JSON file.
 */

export default function testsuiteiterator(suite) {

var suiteName = suite.file
var report={fnMap:{}, f:{}}

// To Iterate over all test results
const totalTests = suite.specs.length  

for (let index = 0; index < totalTests; index++){
    const testObj = suite.specs[index]
    var tempCoverageObj
	var testsLength = testObj.tests.length
    let testCount = totalTests - index
    for( testsLength; testsLength >= 0; testsLength--) {
        const testStatus = testObj.tests[0].results[0].status
        tempCoverageObj = _addfunctionnode(testObj, testCount, testStatus)
        Object.assign(report.fnMap, tempCoverageObj.fnMap)
        Object.assign(report.f, tempCoverageObj.f)
        testsLength--
    }
}
Object.assign(report, _addbranchnode())
Object.assign(report, _addstatementnode())
_createcoveragereport(report, suiteName)
return 0
}