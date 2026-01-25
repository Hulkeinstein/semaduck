# 세마오리농원 프로젝트 초기 세팅 통합 보고서 (Final Governance)

이 문서는 사용자 보완 요청 사항이 반영된 **최종 거버넌스 체계**와 모든 워크플로우 및 규칙을 집대성한 공식 보고서입니다.

---

## 1. 거버넌스 시스템 개요
프로젝트 전반의 일관성과 최고 품질을 유지하기 위해 3계층 에이전트 구조와 명문화된 규칙을 적용합니다.

### 🏛️ 계층형 아키텍처 (Layer 1, 2, 3)
*   **Layer 1 (Directives)**: 에이전트의 지침. 3계층 아키텍처 원칙에 따라 **`directives/`** 폴더 내에 마크다운 SOP 형식으로 존재합니다. 이것은 에이전트의 '중추 지침' 레이어입니다.
*   **Layer 2 (Coordinator)**: 에이전트의 중추. `main.py`가 `directives/` 내의 지침을 읽고 실행을 조율하며 자가 보완을 수행함.
*   **Layer 3 (Execution)**: 에이전트의 손발. 실제 작업 도구(`scraper.py` 등)가 `/execution` 폴더에서 작동함.

---

## 2. 구조화된 워크플로우 (Workflows) 전문

### 🟢 [M-01] 메인 구축 워크플로우 (main-build.md)
| Phase | 단계명 | 핵심 과업 | 성공 기준 |
| :--- | :--- | :--- | :--- |
| **Phase 1** | **Setup** | Next.js 초기화, Supabase 연동 | `package.json` 및 인프라 연동 완료 |
| **Phase 2** | **Design** | 디자인 토큰 및 애니메이션 설정 | `globals.css` 및 테마 컬러 설정 완료 |
| **Phase 3** | **Layout** | 시맨틱 레이아웃(Header, Footer) | 반응형 확인 및 공통 레이아웃 확립 |
| **Phase 4** | **Frontend** | Hero, About, Gallery 등 UI 개발 | 디자인 레퍼런스(Rosabella) 품질 재현 |
| **Phase 5** | **Reservation** | 예약 시스템 연동 | 중복 없는 실시간 예약 기능 구현 |
| **Phase 6** | **Admin** | 관리자 대시보드 구축 | 관리자 인증 및 예약 CRUD 조작 성공 |
| **Phase 7** | **Deployment** | 최적화 및 배포 | Lighthouse Performance 90+ 달성 |

### 🔵 [R-01] 예약 시스템 구축 SOP (reservation-system.md)
1. **DB 설계**: Supabase 테이블 및 RLS 설정.
2. **API 구현**: 가용성 체크 로직 및 서버 액션 개발.
3. **UI 연동**: 실시간 시간대 반영 및 예약 폼 구축.

---

## 3. 상세 규칙 정의 (Detailed Rules)

### 🎨 [Rule] 디자인 시스템 (design-system.md)
- **Colors**: Cream(`#FAF9F6`), Brown(`#2D2926`), Gold(`#C5A039`).
- **Typography**: Display(`Playfair Display`), Body(`Noto Sans KR`).
- **Rounding**: 정갈함을 위해 Border-radius 최대 `2px` 제한.

### 💻 [Rule] 코드 컨벤션 (code-conventions.md)
- **Stack**: Next.js 14, TypeScript Strict, CSS Modules(No Tailwind).
- **Naming**: 컴포넌트 PascalCase, 클래스명 camelCase.
- **Structure**: 서버 컴포넌트 우선 원칙 준수.

### 🔌 [Rule] API 및 서버 액션 (api-design.md)
- **Format**: `{ success: boolean, data: any }` 반환 규격 통일.
- **Error Codes**: `RES_001`(운영시간 외), `RES_002`(중복 예약) 등 표준화.

---

## 4. 강화된 검증 계획
*   **파일 구조 체크리스트**: `/directives`, `/execution`, `/src` 경로 무결성 상시 확인.
*   **기능 테스트 테이블**:
    | 기능명 | 테스트 시나리오 | 기대 결과 |
    | :--- | :--- | :--- |
    | 예약 신청 | 유효 시간대 선택 후 전송 | DB 저장 및 성공 메시지 노출 |
    | 중복 예약 | 동일 시간대 2차 요청 | `RES_002` 에러 및 신청 차단 |
    | 관리자 모드 | 비인증 상태 대시보드 접근 | 로그인 페이지 자동 리다이렉트 |

---

## 5. 최종 가동 확인
모든 거버넌스 파일은 현재 **`directives/`** 폴더에서 3계층 아키텍처 원칙에 따라 에이전트 시스템 및 `main.py` 조율 레이어에 의해 실시되고 있으며, 지속적으로 자가 보완(Self-annealing)되고 있음을 증명합니다.
