import Document, { Html, Head, Main, NextScript } from 'next/document'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Container = styled.section`
  display: flex;
  flex-direction: column;
`
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
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
