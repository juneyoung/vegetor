import { Component } from 'react'

class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null

    return {
      statusCode
    }
  }

  render() {
    return ( 
      <div> Error </div>
    )
  }
}

export default Error