/**
 * 재료 아이템 타입 (IngredientsSection용)
 */
export interface IngredientItem {
  /** 재료 이름 */
  name: string;
  /** 재료 설명 */
  description: string;
  /** 이미지 경로 */
  image: string;
  /** alt 텍스트 */
  alt?: string;
}

/**
 * 분위기/갤러리 아이템 타입 (AtmosphereSection용)
 */
export interface AtmosphereItem {
  /** 아이템 ID */
  id: number;
  /** 이미지 경로 */
  image: string;
  /** 타이틀 */
  title: string;
  /** 설명 */
  desc: string;
}

/**
 * 스토리/히스토리 아이템 타입
 */
export interface StoryItem {
  /** 연도 */
  year: string;
  /** 제목 */
  title: string;
  /** 설명 */
  description: string;
  /** 이미지 경로 (선택) */
  image?: string;
}

/**
 * 연락처 정보 타입
 */
export interface ContactInfo {
  /** 전화번호 */
  phone: string;
  /** 이메일 */
  email?: string;
  /** 주소 */
  address: string;
  /** 영업시간 */
  hours: {
    weekday: string;
    weekend: string;
    holiday?: string;
  };
}
