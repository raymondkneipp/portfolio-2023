const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Jost', ...defaultTheme.fontFamily.sans],
				serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
};
