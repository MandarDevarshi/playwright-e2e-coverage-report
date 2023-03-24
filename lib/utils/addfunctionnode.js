// TODO: Fix
// Function Mapping
/**
 * 
 * @param {Object} testResult 
 * @param {number} index 
 * @param {number} testCounter 
 * @returns {Object} function and f 
 */
 export default function addfunctionnode(testResult, testStatus){
    const fnMap={
        [testResult.id]: {
            "name":testResult.title,
            "loc":{
                "start":{
                    "line": testResult.line,
                    "column": testResult.column
                },
                "end":{
                    "line": testResult.line,
                    "column": testResult.column
                }
            },
            "line": testResult.line
        }
        }
    
    const f={
        [testResult.id]: testStatus == "passed"? 1 : 0
    }
    return {fnMap, f}
    }