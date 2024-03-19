import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config}*/
const config = {
	darkmode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},

	plugins: [
		skeleton({
			themes: { 
					preset: [
					{
						name: "skeleton",
						enhancements: true
					},
					{
						name: "seafoam",
						enhancements: true
					},
					{
						name: "wintry",
						enhancements: true
					},
					{
						name: "crimson",
						enhancements: true
					},
				]
			}
		})
	]
} satisfies Config;

module.exports = config;
