/**
 * 네비게이션 아이템 타입
 */
export interface NavItem {
  /** 표시 이름 */
  name: string;
  /** 링크 경로 */
  href: string;
  /** 외부 링크 여부 */
  external?: boolean;
  /** 아이콘 (선택) */
  icon?: React.ReactNode;
}

/**
 * 소셜 링크 타입
 */
export interface SocialLink {
  /** 플랫폼 이름 */
  name: string;
  /** 링크 URL */
  href: string;
  /** 아이콘 컴포넌트 또는 문자열 */
  icon: React.ReactNode | string;
  /** aria-label */
  ariaLabel: string;
}
