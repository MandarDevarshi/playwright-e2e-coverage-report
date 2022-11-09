// Compile and Save to disk e2e coverage JSON results
import fs from 'fs'

/**
 * returns a coverage object for a e2e object
 * 
 *
 * @name createcoveragereport Compiles converted E2E -> Coverage objects for report  
 * @function
 * @param {Object} coverageReport E2E Test Object The path to the JSON file.
 * @param {String} suiteName The test suite from where the test resides
 */

export default function createcoveragereport(coverageReport, suiteName){
    const reportObj = {
        [suiteName]:{
        "path":suiteName,
        ...coverageReport
        }
    }
    fs.writeFile('results.json',JSON.stringify(reportObj), function(err){
        if(err)throw err;
        console.log("Report Status -> Saved on Disk")
    })
    return 0
}
