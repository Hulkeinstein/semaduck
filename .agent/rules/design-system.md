# 디자인 시스템 및 스타일링 규칙

세마오리농원의 프리미엄 이미지를 유지하기 위해 다음의 디자인 원칙을 엄격히 준수합니다.

## 1. Color Palette (디자인 토큰)
모든 스타일링은 다음의 전역 변수를 사용해야 합니다.
- **Background (Cream)**: `#FAF9F6` (따뜻하고 품격 있는 배경)
- **Primary Text (Brown)**: `#2D2926` (깊은 갈색, 최상의 가독성)
- **Accent (Gold)**: `#C5A039` (고급스러운 포인트 컬러)

## 2. Typography
- **Headings**: `Playfair Display` (Serif) - 우아하고 권위 있는 느낌
- **Body**: `Noto Sans KR` 또는 `Pretendard` - 현대적이고 정갈한 가독성
- **Spacing**: 자간(letter-spacing)은 -0.02em, 행간(line-height)은 1.6~1.8을 권장합니다.

## 3. Shape (형태)
- **Border Radius**: 정갈함을 위해 기본 `0px`를 사용하며, 필요한 경우 최대 `2px`를 넘지 않습니다.
- **Border**: 구분선은 `1px solid rgba(45, 41, 38, 0.1)` (연한 브라운)을 기본으로 합니다.

## 4. Animation Principles
- 과도한 이동보다는 **Opacity(투명도)** 변화 위주의 부드러운 페이드인을 선호합니다.
- Framer Motion 사용 시 `duration: 0.8`, `ease: [0.43, 0.13, 0.23, 0.96]` 값을 기본으로 합니다.

## 5. Styling Method
- Tailwind CSS를 사용하지 않고 **CSS Modules (Vanilla CSS)**를 사용하여 정교한 스타일링을 수행합니다.
- 전역 변수는 `globals.css`의 `:root`에 정의합니다.
