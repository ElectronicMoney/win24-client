import React from 'react';
import Alert from '@mui/material/Alert';


export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        //   logErrorToMyService(error, errorInfo);
        console.error(error, errorInfo)
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <Alert severity="error">Oops: Something went wrong!</Alert>
      }
  
      return this.props.children; 
    }
  }
  