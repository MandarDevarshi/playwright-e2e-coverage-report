# playwright-e2e-coverage-report

> **Caution** - not extensively tested. Share report files to help improve the solution.

<a href="https://www.buymeacoffee.com/mandardev" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## Description

This package is a **hacky** solution to an inconvenience found. 

### The incovenience

Playwright end2end test report structure uses `suites` and `specs` object array and code coverage report structure use `statement`, `branch`, `function` mapping. This left me unable to use places like [codecov](https://about.codecov.io/) etc. to be used as e2e coverage reporting places as well. 

### Where did I try it ?

In a `CI` where playwright e2e test report is generated, converted this to a format that when uploaded to [codecov](https://about.codecov.io/) worked. 

### Dashboard gymnastics

Here e2e tests are thought of as `function` coverage and are therefore under `fnMap` key of the resulting coverage report. 

In dashboards, the header and their meanings would need some mental gymnastics as they are set to code coverage formats example -

|      e2etest      |   coverage    |
| :---------------: | :-----------: |
|       file        |     file      |
| total no of tests | tracked lines |
|      passed       |    covered    |
| `not implemented` |    partial    |
|       fail        |    missed     |

> **NOTE**: Only supports playwright json reporter. 

---

## Usage

Follow the steps below to integrate it in your test pipeline:

### Step 1

In your `CI` pipeline eg. github actions add a step after the one which generates playwright test report.

> Place **after** the step that generates playwright e2e test report.

```yaml
- name: Convert E2E Report to Coverage Report
  run : |
	npm install playwright-e2e-coverage-report
	node ./tests/reportConvertor.js
```

The playwright report named **_`e2eresults.json`_** is to be generated at project root by default when checked out in a CI. To make changes like report location and name they can be made in the script file `reportConverter.js` [See step 2](#step-2).

### Step 2

1. Create `reportConverter.js` in your project's `tests/` folder or how you set it in job step in above step.
2. Add the following content to it
		
	> Check permissions

	```js
	#!/usr/bin/env node
   // Entry point for playwright e2e test report conversion
   // to a code coverage friendly format

   import fs from 'fs'
   import { createE2ECoverageReport } from 'playwright-e2e-coverage-report'

   reportConvertor();

   function reportConvertor (){
   	var data = {}
   	try {
   		// read from project root. Make changes here and in your playwright config to modify path
   		data = JSON.parse(fs.readFileSync('./e2eresults.json', 'utf8'));
   	} catch (err) {
   		console.log("error in reporting coversion", err)
   	} finally {
   		// calls playwright-e2e-report package
   		createE2ECoverageReport({ ...data })
   		console.log("==== Report Converted for Coverage ====")
   	}
   	return 0
   	}
	```

---

<a href="https://www.buymeacoffee.com/mandardev" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>