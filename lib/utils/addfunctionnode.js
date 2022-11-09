// TODO: Fix
// Function Mapping
/**
 * 
 * @param {Object} testResult 
 * @param {number} index 
 * @param {number} testCounter 
 * @returns {Object} function and f 
 */
 export default function addfunctionnode(testResult, testCounter, testStatus){
    const fnMap={
        [testCounter]: {
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
    
    const f={
        [testCounter]: testStatus == "passed"? 1 : 0
    }
    return {fnMap, f}
    }