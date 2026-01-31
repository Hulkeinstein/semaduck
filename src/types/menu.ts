/**
 * 메뉴 상세 정보 타입
 */
export interface MenuDetail {
  /** 항목 라벨 (예: "추가 메뉴", "코스 포함") */
  label: string;
  /** 항목 내용 */
  text: string;
  /** 강조 표시 여부 */
  highlight?: boolean;
  /** 원산지 정보 여부 (더 작은 폰트로 표시) */
  isOrigin?: boolean;
}

/**
 * 메뉴 아이템 타입
 */
export interface MenuItem {
  /** 메뉴 카테고리 (예: "Main Menu", "Side Dish") */
  step: 'Main Menu' | 'Side Dish' | 'Beverage' | 'Special';
  /** 메뉴 이름 */
  name: string;
  /** 가격 문자열 */
  price: string;
  /** 메뉴 설명 (선택) */
  description?: string;
  /** 상세 정보 목록 */
  details?: MenuDetail[];
  /** 메뉴 이미지 경로 (선택) */
  image?: string;
}

/**
 * 메뉴 섹션 Props
 */
export interface MenuSectionProps {
  /** 메뉴 아이템 배열 (외부에서 주입 시) */
  items?: MenuItem[];
  /** 섹션 타이틀 */
  title?: string;
  /** 섹션 서브타이틀 */
  subtitle?: string;
}
