'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * 컴포넌트 레벨 에러를 캐치하는 에러 바운더리
 *
 * @example
 * <ErrorBoundary fallback={<p>메뉴를 불러올 수 없습니다</p>}>
 *   <MenuSection />
 * </ErrorBoundary>
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // 에러 로깅 (프로덕션에서는 에러 모니터링 서비스로 전송)
    console.error('컴포넌트 에러:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 커스텀 fallback이 있으면 사용
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // 기본 fallback UI
      return (
        <div
          style={{
            padding: '2rem',
            textAlign: 'center',
            backgroundColor: 'var(--sema-paper-white)',
            borderRadius: '8px',
            margin: '1rem',
          }}
        >
          <p
            style={{
              color: 'var(--sema-forest-green)',
              fontFamily: 'var(--font-noto-serif)',
            }}
          >
            이 섹션을 불러올 수 없습니다.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{
              marginTop: '1rem',
              padding: '8px 24px',
              backgroundColor: 'var(--sema-forest-green)',
              color: 'var(--sema-paper-white)',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            다시 시도
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
