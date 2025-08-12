import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0EA5E9',
          light: '#38BDF8',
        },
        secondary: {
          DEFAULT: '#10B981',
          light: '#34D399',
        },
        accent: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
        },
        black: {
          50: '#0F0F0F',
          100: '#1A1A1A',
          200: '#262626',
          300: '#404040',
          400: '#525252',
          500: '#737373',
          600: '#A3A3A3',
          700: '#D4D4D4',
          800: '#E5E5E5',
          900: '#F5F5F5',
        }
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}
export default config
