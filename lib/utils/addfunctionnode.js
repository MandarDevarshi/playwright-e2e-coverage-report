// TODO: Fix
// Function Mapping
/**
 * 
 * @param {Object} testResult 
 * @param {number} index 
 * @param {number} testCounter 
 * @returns {Object} function and f 
 */
 export default function addfunctionnode(testResult){
    var fnMap = {}
    var f = {}
    // Iterate over tests in a spec
    for (let testIndex = 0; testIndex < testResult.length; testIndex++){
        var testObj = testResult[testIndex] 
        var testStatus = testObj.tests[0].results[0].status
        // fnMap Object
        let fnMapObj={
        [testObj.id]: {
            "name":testObj.title,
            "loc":{
                "start":{
                    "line": testObj.line,
                    "column": testObj.column
                },
                "end":{
                    "line": testObj.line,
                    "column": testObj.column
                }
            },
            "line": testObj.line
        }
        }
        // f Object
        let fObj={
            [testObj.id]: testStatus == "passed"? 1 : 0
        }
        Object.assign(fnMap, fnMapObj)
        Object.assign(f, fObj)
    }
    return {fnMap, f}
}