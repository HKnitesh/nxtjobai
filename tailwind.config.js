/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  },
  boxShadow: {
    '1hd': '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
    '2bx': '0px 1px 2px rgba(0, 0, 0, 0.05)',
    '3bx': '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '4bx': '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '5bx': '0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)',

  },
  fontFamily: {
    'inter': ['Inter Nova', 'sans-serif'],
  },
  colors: {
    'whiteF': '#FFFFFF',
    'blackF': '#212121',
    'gray500': '#AFAFAF',
    'cream': '#F5F4F4',
    'gray50': '#9E9E9E',
  },
  animation: {
    'dialog': 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
  },
  backdropBlur: {
    xs: '2px',
  },

},
    
  },
plugins: [],
}
