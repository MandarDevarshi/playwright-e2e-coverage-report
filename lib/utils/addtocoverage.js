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

export default function addtocoverage(testResult, index) {
	// Find test status passed or otherwise
	var testStatus = testResult.tests[index].results[index].status
	var testKey = `Test @ line : ${testResult.line}`
	const statementMap = {
		        [index]:{
		            "start":{
		                "line": testResult.line,
		                "column": testResult.column
		            },
		            "end":{
		                "line": testResult.line,
		                "column": testResult.column
		            }
		        }
		    }
		    const fnMap={}
		    const branchMap={}
		    const s = {
		        [index]: testStatus == "passed"? 1 : 0
		    }
		    const f={}
		    const b={}
	
		    const coverageReportObj = {
		        [testKey]:{
		            path: testResult.file,
		            statementMap: statementMap,
		            fnMap : fnMap,
		            branchMap: branchMap,
		            s:s,
		            f:f,
		            b:b
		        }
		    }
	return coverageReportObj
}
