// Compile and Save to disk e2e coverage JSON results
import editJsonFile from "edit-json-file";

/**
 * returns a coverage object for a e2e object
 * 
 *
 * @name createcoveragereport Compiles converted E2E -> Coverage objects for report  
 * @function
 * @param {Object} coverageReport E2E Test Object The path to the JSON file.
 * @param {JsonEditor} file An instance of JsonEditor
 */
export default function createcoveragereport(coverageReport, file){
    file.set(coverageReport)
    file.save()
    return 0
}
