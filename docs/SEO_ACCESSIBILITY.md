# SEO_ACCESSIBILITY — 기본 SEO 및 접근성

## 페이지 title 권장
- 기업개요 | AI 지역경제 전문 컨설팅 기업
- AI구축사례 | AI 지역경제 전문 컨설팅 기업
- AI주차장 | AI 지역경제 전문 컨설팅 기업
- AI스마트팜 | AI 지역경제 전문 컨설팅 기업
- AI관광 | AI 지역경제 전문 컨설팅 기업
- 문의하기 | AI 지역경제 전문 컨설팅 기업

## Meta
각 페이지에 고유 description을 작성하되 해당 content 문서의 첫 설명을 기반으로 한다. 새로운 사실을 만들지 않는다.

필수:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
<meta property="og:image" content="/assets/images/common/og-image.webp">
```

## Semantic HTML
- `header`, `nav`, `main`, `section`, `article`, `footer`
- 페이지별 `h1` 1개
- 섹션 제목 `h2`
- 카드 제목 `h3`

## 접근성
- skip link 권장
- `aria-current="page"` active 메뉴 권장
- 메뉴 토글 `aria-expanded`, `aria-controls`
- 장식 SVG는 `aria-hidden="true"`
- 텍스트 대비 WCAG AA 지향
- `:focus-visible` 스타일 필수
- 전화/이메일은 `tel:` / `mailto:` 링크 가능하나 화면 텍스트는 content 그대로 유지

## 이미지 alt 작성 규칙
alt는 장면과 역할을 설명한다. SEO 키워드를 반복하지 않는다.
예: `AI 카메라와 차단기가 설치된 스마트 주차장 전경`
