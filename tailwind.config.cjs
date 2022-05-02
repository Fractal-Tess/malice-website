const colors = require('tailwindcss/colors');

function getColor(variable) {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${variable}))`;
		}
		return `rgb(var(${variable}) / ${opacityValue})`;
	};
}

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,css,svelte}'],
	theme: {
		colors: {
			text: getColor('--text-color'),
			prime: getColor('--prime'),

			secondary: getColor('--secondary'),
			surface: {
				dark: getColor('--surface-dark'),
				light: getColor('--surface-light')
			},
			gray: colors.stone,
			white: colors.white,
			current: 'currentColor'
		},
		container: {
			center: true
		},
		extend: {},
		fontFamily: {
			code: ['Fira Code', 'monospace']
		}
	},
	plugins: []
};
