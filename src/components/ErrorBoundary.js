import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        return this.state.hasError ?
            <h1>Something went wrong</h1> :
            this.props.children
    }
}

export default ErrorBoundary