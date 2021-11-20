/* eslint-disable no-console */
import React, { ReactNode } from 'react';

/**
 * 错误边界
 */
class ErrorBoundary extends React.PureComponent<
  React.PropsWithChildren<{
    /** 错误回调 */
    onError?: (error: Error) => void;
    /** 发生错误后的替补渲染方案 */
    fallback?: (error: Error) => ReactNode;
  }>,
  {
    error: Error | null;
  }
> {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    onError: (error: Error) =>
      console.error(error, { description: '渲染错误' }),
  };

  constructor(props:any) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidCatch(error: Error) {
    console.log('fuck', error);
    const { onError } = this.props;
    // eslint-disable-next-line no-unused-expressions
    onError && onError(error);
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    const { children, fallback } = this.props;
    if (error) {
      return fallback ? fallback(error) : null;
    }

    return children;
  }
}

export default ErrorBoundary;
