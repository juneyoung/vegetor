import Document, { Html, Head, Main, NextScript } from 'next/document'
import { createGlobalStyle, ServerStyleSheet } from 'styled-components'
import reset from 'styled-reset'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Global = createGlobalStyle`
  ${reset};
  html, body {
    font-family: NotoSansCJKkr;
  }
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`
class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <Html>
        <Head>
        { this.props.styleTags }
        <title>VEGETOR</title>
        </Head>
        <body>
          <Global />
          <Header title="VEGETOR" isLoggedIn={ false } avatarUrl="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
