import React from "react"

class Error extends React.Component {
  static getInitialProps({ res, err }: any) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null

    return { statusCode }
  }

  render() {
    return (
      <p>
        
      </p>
    )
  }
}

export default Error
