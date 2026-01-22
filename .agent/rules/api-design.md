# API 설계 및 통신 규칙

## 1. 응답 형식 (Response Format)
모든 API 응답은 일관된 구조를 가져야 합니다.
- **성공**: `{ success: true, data: { ... } }`
- **실패**: `{ success: false, error: { code: 'ERR_CODE', message: 'User friendly message' } }`

## 2. 에러 코드 표준화
예약 시스템 관련 주요 에러 코드:
- `RES_001`: 운영 시간 외 예약 시도
- `RES_002`: 이미 예약된 시간대
- `RES_003`: 최대 수용 인원 초과
- `RES_004`: 부적절한 연락처 형식

## 3. 보안 및 유효성 검사
- 모든 POST/PATCH 요청 데이터는 서버 측에서 반드시 한 번 더 검증합니다.
- 관리자 권한이 필요한 API는 미들웨어(Middleware) 단계에서 세션을 확인합니다.
