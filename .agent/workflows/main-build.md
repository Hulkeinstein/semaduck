---
description: 세마오리농원 프리미엄 웹사이트 구축 메인 워크플로우
---

# 메인 구축 워크플로우 (7 Phases)

이 워크플로우는 세마오리농원 웹사이트의 초기 설정부터 배포까지의 전 과정을 가이드합니다.

## Phase 1: 환경 설정 (Setup)
- [ ] Next.js 14 프로젝트 초기화 (App Router, TypeScript)
- [ ] CSS Modules 환경 확인 및 `globals.css` 초기화
- [ ] Supabase 프로젝트 생성 및 환경 변수(`.env.local`) 설정
- **성공 기준**: `npm run dev` 실행 시 에러 없이 기본 페이지 노출 및 DB 연결 확인

## Phase 2: 디자인 시스템 구축 (Design)
- [ ] `globals.css`에 디자인 토큰(Cream, Brown, Gold) 변수 등록
- [ ] 폰트 최적화 (`next/font` - Playfair Display, Noto Sans KR)
- [ ] 공통 애니메이션 유틸리티 정의 (Framer Motion)
- **성공 기준**: 기본 배경색과 타이포그래피가 적용된 빈 페이지 확인

## Phase 3: 레이아웃 및 공통 요소 (Layout)
- [ ] 시맨틱 구조의 루트 `layout.tsx` 구성
- [ ] 반응형 헤더(네비게이션 오버레이 포함) 및 푸터 구현
- **성공 기준**: 모든 기기 크기에서 헤더/푸터가 정상적으로 렌더링됨

## Phase 4: 프론트엔드 섹션 개발 (Frontend)
- [ ] **Hero**: 몰입형 배경과 페이드인 타이포그래피
- [ ] **About**: 오리농원의 역사와 컨셉 (교차 레이아웃)
- [ ] **Gallery**: 고품질 음식 사진 및 호버 효과
- **성공 기준**: 디자인 레퍼런스(Rosabella) 수준의 시각적 완성도 달성

## Phase 5: 예약 시스템 (Reservation)
- [ ] [예약 시스템 전용 워크플로우](file:///.agent/workflows/reservation-system.md) 실행
- [ ] 가용 시간 실시간 조회 및 예약 폼 연동
- **성공 기준**: 예약 데이터가 Supabase DB에 정상적으로 저장됨

## Phase 6: 관리자 대시보드 (Admin)
- [ ] Supabase Auth 기반 관리자 로그인 구현
- [ ] 예약 승인/거절 및 운영 시간 관리 UI
- **성공 기준**: 관리자 계정으로 로그인하여 예약 상태를 변경할 수 있음

## Phase 7: 최상위 검증 및 배포 (Deployment)
- [ ] Lighthouse 점검 (Performance 90+ 목표)
- [ ] Vercel 배포 및 도메인 연결
- **성공 기준**: 구글 검색 최적화 및 안정적인 라이브 서비스 확인
