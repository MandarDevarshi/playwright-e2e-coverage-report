#!/usr/bin/env node
// Entry point script for playwright e2e test report conversion
// to coverage friendly format
// 

const fs = require('node:module')
const createE2ECoverageReport = require('playwright-e2e-coverage-report')

/**
 * Entry point script that is executed by node.
 * It executes after playwright test report is generated
 * Currently, only JSON format is supported
 * Consumes, playwright test report from project root (modifiable)
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
	console.log("*** Error in coverting to coverage format *** \n", err)
} finally {
	// calls playwright-e2e-report package
	createE2ECoverageReport({ ...data })
	console.log("=======================================")
	console.log("-- E2E Report Converted for Coverage --")
	console.log("=======================================")
}
return 0
}