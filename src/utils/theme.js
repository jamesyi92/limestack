const limestackColors = {
	primary: '#000e1a',
  secondary: '#fff',
  tertiary: '#007ce0',
}

export default { 
	colors: {
    ...limestackColors,
    light: '#ffffff',
    dark: '#000000'
  },
  background: {
  	...limestackColors
  },
  breakpoints: ['57.6rem', '76.8rem', '99.2rem', '130.2rem', '244rem'],
  space: ['0', '.4rem', '.8rem', '1.6rem', '3.2rem', '6.4rem', '12.8rem', '25.6rem', '51.2rem'],
}