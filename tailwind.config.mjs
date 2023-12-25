/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			'yellowON' :'#fec233',
			'blackON' : '#202020',
			'grayON' : '#545454',
			'slateON' : '#c7c9cb'
		},
		extend: {
			fontFamily:{
				serif: ["Montserrat", ...defaultTheme.fontFamily.serif]
			}
		},
	},
	plugins: [],
}