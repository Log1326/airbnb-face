/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			keyframes: {
				transformDown: {
					'0%': { transform: 'translateY(100px)' },
					'50%': { transform: 'translateY(50px)' },
					'100%': { transform: 'translateY(0px)' }
				}
			},
			animation: {
				transformDown: 'transformDown .7s linear'
			}
		}
	},
	plugins: [require('tailwind-scrollbar-hide')]
}
