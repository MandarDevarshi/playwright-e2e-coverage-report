#!/usr/bin/env node
// Entry point script for playwright e2e test report conversion
// to a coverage friendly format
// 
// Downloaded by CI step

import fs from 'fs'
import { createE2ECoverageReport } from 'playwright-e2e-coverage-report'

/**
 * Entry point script to start report conversion script
 * executes after playwright test report is generate
 * Currently, only supports json format
 * Consumes, playwright test report from app root 
 *
 * @name reportConvertor
 * @function
 */

reportConvertor();

function reportConvertor (){
var data = {}
try {
	// read playwright test report from project root
  // change location and name here to match with playwright config
	data = JSON.parse(fs.readFileSync('./e2eresults.json', 'utf8'));
} catch (err) {
	console.log("error in reporting coversion", err)
} finally {
	// calls playwright-e2e-report package
	createE2ECoverageReport({ ...data })
	console.log("=======================================")
	console.log("==== Report Converted for Coverage ====")
	console.log("=======================================")
}
return 0
}
