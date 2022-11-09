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
	// var testKey = `${testResult.file}#L${testResult.line}`
	
	// Statement Mapping
	const statementMap = {
				// [index]:{
				// 	"start":{
				// 		"line": testResult.line,
				// 		"column": testResult.column
				// 	},
				// 	"end":{
				// 		"line": testResult.line,
				// 		"column": testResult.column
				// 	}
				// }
			}
	const s = {
				// [index]: testStatus == "passed"? 1 : 0
	}

	// Function Mapping
	const fnMap={
		"name": testResult.title,
		"line": testResult.line,
		[index]: {
			"start":{
				"line": testResult.line,
				"column": testResult.column
			},
			"end":{
				"line": testResult.line,
				"column": testResult.column
			}
		},
		"id":index+1
	}
	const f={
		[index]: testStatus == "passed"? 1 : 0
	}
		    
	// Branch Mapping
	const branchMap={}
	const b={}
	
	const coverageReportObj = {
		[`${testResult.file}`]:{
			path:`${testResult.file}`,
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
