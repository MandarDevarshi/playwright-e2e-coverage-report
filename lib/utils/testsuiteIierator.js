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
    const testObj = suite[index]
    // Iterate over specs as per the test file
    for (let specIndex = 0; specIndex < testObj.specs.length; specIndex++) {
      // Spec object
      let specObj = testObj.specs[specIndex]
      const fileName = specObj.file
      // Temporary Object
      var tempCoverageObj
      // Suite report Object
      var suiteReportObj = { [fileName]:{fnMap: {}, f: {} }}
      // Iterate over tests
      for (let testIndex = 0; testIndex < specObj.tests.length; testIndex++) {
        let testObj = specObj.tests[testIndex]
        let testResult = testObj.results[0].status
        tempCoverageObj = _addfunctionnode(specObj, testResult)
        Object.assign(suiteReportObj[fileName].fnMap, tempCoverageObj.fnMap)
        Object.assign(suiteReportObj[fileName].f, tempCoverageObj.f)
      }
      Object.assign(suiteReportObj[fileName], _addbranchnode())
      Object.assign(suiteReportObj[fileName], _addstatementnode())
    }
    Object.assign(report, suiteReportObj)
  }
  _createcoveragereport(report, testDir)
  return 0
}