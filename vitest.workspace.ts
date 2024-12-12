// Module imports
import { defineWorkspace } from 'vitest/config'





export default defineWorkspace([
	{
		test: {
			environment: 'jsdom',
			exclude: ['./release.config.js'],
			include: ['test/unit/**/*.test.ts?(x)'],
			pool: 'forks',
		},
	},
])
