import Document, { Head, Html, Main, NextScript } from 'next/document'
import { createGlobalStyle, ServerStyleSheet } from 'styled-components'

const Global = createGlobalStyle`

`
class MyDocument extends Document {
  static async getInitialProps ({ renderPage }: any) {
    const sheet = new ServerStyleSheet()

    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render () {
    const { styleTags }: any = this.props

    return (
      <Html>
        <Head>{ styleTags }</Head>
        <body>
          <Main />
          <Global />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
