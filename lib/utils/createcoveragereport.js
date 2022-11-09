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
 * @param {String} suiteName The test suite from where the test resides
 */

export default function createcoveragereport(coverageReport, file, suiteName){
		file.set(`${suiteName}`, coverageReport)
		file.save()
		return 0
}
