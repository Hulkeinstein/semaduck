'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // 에러 로깅 (프로덕션에서는 에러 모니터링 서비스로 전송)
    console.error('페이지 에러:', error);
  }, [error]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
      }}
    >
      <h2
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontFamily: 'var(--font-noto-serif)',
          marginBottom: '1rem',
        }}
      >
        문제가 발생했습니다
      </h2>
      <p
        style={{
          fontSize: '1rem',
          opacity: 0.7,
          marginBottom: '2rem',
          maxWidth: '400px',
        }}
      >
        일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
      </p>
      <button
        onClick={reset}
        style={{
          padding: '12px 32px',
          backgroundColor: 'var(--sema-forest-green)',
          color: 'var(--sema-paper-white)',
          border: 'none',
          borderRadius: '4px',
          fontSize: '1rem',
          fontFamily: 'var(--font-noto-serif)',
          cursor: 'pointer',
          transition: 'opacity 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
        onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
      >
        다시 시도
      </button>
    </div>
  );
}
