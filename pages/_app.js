import App from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import store from '../redux'
import theme from './_theme'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <Provider store={ store }>
        <ThemeProvider theme={ theme }>
          <Component { ...pageProps } />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default MyApp
