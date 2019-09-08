import Document, { Head, Html, Main, NextScript  } from 'next/document'
import styled, { createGlobalStyle ,ServerStyleSheet } from 'styled-components'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'

const Global = createGlobalStyle`
  * { font-family: sans-serif; };
  body {
    max-width: 1060px;
    margin: auto;
    background-color: #FFFFFF;
  }
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
`
class MyDocument extends Document {
  static async getInitialProps({ renderPage }: any) {
    const sheet = new ServerStyleSheet()

    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    const { styleTags }: any = this.props

    return (
      <Html>
        <Head>
          <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Righteous&display=swap' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
          { styleTags }
        </Head>
        <body>
          <Container>
            <Header />
            <Navigation />
            <Main />
            <Footer />
          </Container>
          <Global />
          <NextScript />
          <script src='//kit.fontawesome.com/e5960a9f50.js'></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
