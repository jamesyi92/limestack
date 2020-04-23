import React from 'react'
import { GlobalStyle } from '../utils/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'

import Header from '../components/Header'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={ theme }>
    	<GlobalStyle />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}


export default Layout
