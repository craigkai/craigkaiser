/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateRows: {
				12: 'repeat(12, minmax(0, 1fr))'
			},
			gridTemplateCols: {
				12: 'repeat(12, minmax(0, 1fr))'
			},
			dropShadow: {
				glow: ['0 0px 20px rgba(255,255, 255, 0.35)', '0 0px 65px rgba(255, 255,255, 0.2)'],
				'glow-cyan': ['0 0px 20px rgba(6, 182, 212, 0.5)', '0 0px 40px rgba(6, 182, 212, 0.3)'],
				'glow-purple': ['0 0px 20px rgba(168, 85, 247, 0.5)', '0 0px 40px rgba(168, 85, 247, 0.3)'],
				'glow-pink': ['0 0px 20px rgba(236, 72, 153, 0.5)', '0 0px 40px rgba(236, 72, 153, 0.3)']
			},
			animation: {
				tilt: 'tilt 10s infinite linear',
				'gradient-x': 'gradient-x 6s ease infinite',
				float: 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				shimmer: 'shimmer 2s linear infinite'
			},
			keyframes: {
				tilt: {
					'0%, 50%, 100%': {
						transform: 'rotate(0deg)'
					},
					'25%': {
						transform: 'rotate(0.5deg)'
					},
					'75%': {
						transform: 'rotate(-0.5deg)'
					}
				},
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				float: {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '0.6'
					},
					'50%': {
						opacity: '1'
					}
				},
				shimmer: {
					'0%': {
						'background-position': '-200% 0'
					},
					'100%': {
						'background-position': '200% 0'
					}
				}
			}
		}
	},
	plugins: []
};
