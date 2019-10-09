import Document, { Html, Head, Main, NextScript } from 'next/document'
import { createGlobalStyle, ServerStyleSheet } from 'styled-components'
import reset from 'styled-reset';

import Header from '../components/Header'
import Footer from '../components/Footer'

const Global = createGlobalStyle`
  ${ reset }
  html, body {
    font-family: NotoSansCJKkr;
  }
  body {
    margin: 0;
    .slick-dots .slick-active button:before {
        color: #1bcd92;
    }
    .slick-dots li button:before {
        color: #ffffff;
    }
    
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
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
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
