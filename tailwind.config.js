module.exports = {
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			cursor: {
				crosshair: 'crosshair',
			},
		},
	},
	variants: {
		extend: {
			display: ['group-hover'],
			scale: ['group-hover'],
			borderWidth: ['last'],
		},
	},
	plugins: [],
};
