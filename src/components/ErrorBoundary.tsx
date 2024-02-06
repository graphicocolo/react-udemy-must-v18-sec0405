import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

const logErrorToMyService = (error: Error, errorInfo: ErrorInfo): void => {
  // ここにエラーをロギングするためのコードを追加
  console.error('Error occurred:', error, errorInfo);
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // エラーが発生したらstateを更新して、次のレンダリングでフォールバックUIが表示されるようにする
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // エラーをログに記録することもできます
    logErrorToMyService(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // カスタムのフォールバックUIをレンダリングできます
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
