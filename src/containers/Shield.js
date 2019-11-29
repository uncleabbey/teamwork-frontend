import React, { Component } from 'react'

export class ErrorBoundary extends Component {
  state = {
    error: false,
    info: null,
  }
  componentDidCatch(error, info) {
    this.setState({
      error: error,
      info: info,
    });
  }
  
  render() {
    if(this.state.error) {
      // Some error was thrown. Let's display something helpful to the user
      return (
        <div>
          <h5>{this.props.message}</h5>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.info.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
}
}
export default ErrorBoundary;
