import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';

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
					{
						name: "vintage",
						enhancements: true
					},
				]
			}
		}),
		forms,
	]
} satisfies Config;

module.exports = config;
