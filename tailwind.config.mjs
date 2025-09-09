import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					dark: '#0a2540',
					blue: '#0052cc',
					turquoise: '#00c7d9',
					white: '#ffffff',
					orange: '#ff6b35'
				}
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				display: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
			},
			animation: {
				'float': 'float 3s ease-in-out infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}