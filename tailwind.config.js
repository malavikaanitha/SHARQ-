/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
      'red': 'rgb(254,15,15)',
    }, fontFamily: {
      popinsblk:['Poppins-black'],
      popinsbld:['Poppins-bold'],
      popinsmd:['Poppins-Medium'],
      popinsxtrabld:['Poppins-extrabld'],
      popinstin:['Poppins-thin'],
    }, screens: {
      lg: { max: '1800px' },
      md: { max: '990px' },
      sm: { max: '600px' },
      xs: { max: '400px' },
      minmd: '1700px',
      minlg: '2100px',
    },
    linearGradientColors: {
      'red-black-purple': ['rgb(254,15,15)', 'rgba(0,0,0,1)', 'rgba(27,18,131,1)'],
    },
    backgroundImage: theme => ({
      'red-black-purple': 'linear-gradient(175deg, ' + theme('linearGradientColors.red-black-purple').join(', ') + ')',
    }),
    },
  },
  plugins: [],
}
