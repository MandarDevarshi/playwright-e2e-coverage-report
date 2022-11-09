// To create a coverage object of e2e test and status check
/**
 * returns a coverage object for a e2e object
 * 
 *
 * @name addtocoverage
 * @function
 * @param {Object} testResult E2E Test Object The path to the JSON file.
 * @param {number} index An object containing the following fields:
 * @return {Object} Converted, E2E to equivalent coverage Object.
 */
 import addfunctionnode from "./addfunctionnode.js"

 export default function addtocoverage(testResult, index, testCounter) {
 
	 // Find test status, eg. is it passed, skipped etc
	 const testStatus = testResult.tests[index].results[index].status
 
	 const functionCoverage = addfunctionnode(testResult, index, testCounter, testStatus)
	 const coverageReportObj = {
			 // ...statementCoverage,
			 // ...branchCoverage,
			 ...functionCoverage
			 }
	 return {...coverageReportObj}
 }