import { defineConfig } from 'cypress'

require('dotenv').config()
console.log(process.env)

export default defineConfig({
	projectId: 'test_project',
    numTestsKeptInMemory: 10,
    trashAssetsBeforeRuns: true, // trash assets within the downloadsFolder, screenshotsFolder, videosFolder before tests run
	video: false,
    videoCompression: false,
	defaultCommandTimeout: 20000,
    viewportWidth: 1920,
	viewportHeight: 1080,
    retries: {
		runMode: 1, // retry attempts for `cypress run`
		openMode: 0, // retry attempts for `cypress open`
	},
	env: {
		USER_USERNAME: process.env.CYPRESS_USER_USERNAME,
		USER_PASSWORD: process.env.CYPRESS_USER_PASSWORD,
		grepFilterSpecs: true,
		grepOmitFiltered: true,
		grepUntagged: false,
	},
	e2e: {
        baseUrl: 'https://riders.rouvy.dev/',
    },
})