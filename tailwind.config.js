/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html", "script.js"],
	theme: {
		extend: {
			colors: {
				"terminal-text": "#2D991D",
				"terminal-bg": '#131112',
				"left-body-gradient": "#CC978E",
				"center-body-gradient": "#F39C6B",
				"right-body-gradient": "#FF3864",
			},
			fontFamily: {
				"terminal": ["Jetbrains Mono"]
			}
		},
	},
	plugins: [],
};
