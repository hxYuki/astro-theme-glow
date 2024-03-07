import { createThemes } from 'tw-colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ["selector", "[data-theme='dark']"],
	theme: {
		screens: {
			'sm': '636px'
		},
		fontFamily: {

		},
		extend: {
			fontFamily: {
				art: ['Fredericka the Great'],
				default: ['"Mulish, serif"'],
				'serif-jp': ['"Noto Serif JP"'],
				'serif-sc': ['"Noto Serif SC"'],
				code: ['"Fira Code"', 'monospace'],
			}
		},
	},
	plugins: [
		createThemes({
			"light": {
				"default": "#121313",
				"basement": "#e5e7eb",
				"primary": "#da6173",
				"secondary": "#fef08a",
				"accent": "#99f6e4",
				"neutral": "#121313",

			},
			"dark": {
				"default": "#c7cace",
				"basement": "#24292e",
				"primary": "#da6173",
				"secondary": "#fef08a",
				"accent": "#99f6e4",
				"neutral": "#c7cace",
			}
		})
	],
}
