# 코드 컨벤션 및 개발 규칙

## 1. TypeScript & React
- 모든 컴포넌트와 함수에는 명확한 타입을 정의합니다 (`interface`, `type` 활용).
- Next.js의 Client와 Server 컴포넌트를 명확히 분리합니다 (`'use client'` 지시어 적절히 사용).
- 가능하면 Server 컴포넌트 및 Server Actions를 우선적으로 사용하여 성능을 최적화합니다.

## 2. CSS Modules 명명 규칙
- 파일명: `[ComponentName].module.css` (PascalCase 기반)
- 클래스명: camelCase를 사용합니다 (예: `.heroContainer`, `.navItem`).

## 3. 데이터 핸들링 (Supabase)
- DB 인터페이스는 `lib/supabase/types.ts`에 정의하고 관리합니다.
- 데이터 조회 로직은 컴포넌트와 분리하여 별도의 서비스 레이어로 관리하는 것을 권장합니다.

## 4. 파일 구조
- 컴포넌트 내부에 복잡한 로직을 두지 않고, `hooks`나 `utils`로 분리하여 코드 가독성을 높입니다.
