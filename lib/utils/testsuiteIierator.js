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

export default function testsuiteiterator(suite, testDir) {

  // TODO: This should now be moved to iteration step as to all suites under a project
  // are being iterated over
  // var suiteName = suite.file
  var report = {}
  
  // Iterate over all tests in a suite
  const totalTests = suite.length
  for (let index = 0; index < totalTests; index++) {

    const suiteObj = suite[index]
    // File name associated with test suite
    const fileName = suiteObj.file

    // Spec object
    let specObj = suiteObj.specs
        
    // Temporary Object
    var tempCoverageObj

    // Suite report Object
    var suiteReportObj = { [fileName]:{path:fileName,fnMap: {}, f: {} }}
    var testReportObj = suiteReportObj[fileName]
    tempCoverageObj = _addfunctionnode(specObj)
    // Assign fnMap to test report object
    Object.assign(testReportObj.fnMap,tempCoverageObj.fnMap)
    // Assign f key to test report object
    Object.assign(testReportObj.f, tempCoverageObj.f)
    // Assign the test report object to the suite key
    Object.assign(suiteReportObj[fileName],testReportObj)
  
    // Add the rest of keys, empty
    Object.assign(suiteReportObj[fileName], _addbranchnode())
    Object.assign(suiteReportObj[fileName], _addstatementnode())

    // Create the final report object
    Object.assign(report, suiteReportObj)
  }
  // Write the final report
  _createcoveragereport(report)
  return 0
}