import React, { ErrorInfo } from 'react';
import { toast } from 'react-toastify';
import ErrorScreen from '../../pages/error-screen/error-screen';

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    toast(error.message);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorScreen />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
