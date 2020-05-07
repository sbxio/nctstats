import React from "react";
import P from "prop-types";

export class ErrorBoundary extends React.Component {
  static propTypes = {
    children: P.node
  };

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return {hasError: true, error};
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please reload the page</h1>;
    }

    return this.props.children;
  }
}
