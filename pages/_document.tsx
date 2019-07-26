import Document, { Html, Head, Main, NextScript } from "next/document"
import styled, { ServerStyleSheet } from "styled-components"

import Header from "../components/Header"
import Footer from "../components/Footer"

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
          <title>Vegetor</title>
          { styleTags }
        </Head>
        <body>
          <Container>
            <Header />
            <Main />
            <Footer />
          </Container>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
