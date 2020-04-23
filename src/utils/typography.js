import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  googleFonts: [
    {
      name: 'Poppins',
      styles: ['400', '500', '700'],
    },
  ],
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 500,
  headerFontFamily: ['Poppins', 'sans-serif'],
  bodyFontFamily: ['Poppins', 'sans-serif'],
  overrideStyles: ({ rhythm }, options, styles) => ({
    'body' : {
      fontSize: '16px',
    },
    "h1,h2,h3,h4,h5,h6": {
      lineHeight: 1.1,
    },
    'h1': {
      fontSize: '5rem',
    },
    'h2': {
      fontSize: '3.6rem',
    },
    'h3': {
      fontSize: '2.1rem',
    },
    'p:not(:last-child)': {
      marginBottom: '3rem',
    }
  }),
})

export default typography