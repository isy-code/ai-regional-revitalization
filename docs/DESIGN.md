# DESIGN – AI 지역경제 전문 컨설팅 기업 웹사이트

## 1. 디자인 목표
첨부 시안의 밝은 Blue/White 기반 공공·컨설팅형 인포그래픽 분위기를 유지한다. 모든 페이지는 **기업개요 페이지를 공통 레이아웃 기준**으로 사용하고, Header / HERO / 본문 폭 / Footer의 규격을 통일한다.

---

## 2. 디자인 토큰

```css
:root {
  --navy: #082b64;
  --blue: #0b63ce;
  --accent-blue: #1677ff;
  --light-blue: #eaf4ff;
  --border-blue: #bfd9f5;
  --green: #0b7a45;
  --purple: #6a35b7;
  --orange: #f36c21;
  --text-primary: #0b2554;
  --text-secondary: #425d7c;
  --surface: #ffffff;
  --background: #f6fafe;
  --container: 1120px;
  --header-h: 72px;
  --hero-h: 220px;
  --footer-h: 180px;
  --radius-card: 10px;
}
```

---

## 3. 공통 레이아웃 수치

| 항목 | Desktop | Tablet | Mobile |
|---|---:|---:|---:|
| Header | 72px | 68px | 64px |
| HERO min-height | 220px | 210px | auto / min 230px |
| Container | max 1120px | calc(100%-40px) | calc(100%-32px) |
| Section gap | 56px | 44px | 32px |
| Card gap | 20px | 16px | 14px |
| Footer min-height | 180px | 170px | 160px |

**중요:** 동일 breakpoint 내에서 페이지마다 Header/HERO/Footer 높이를 바꾸지 않는다.

---

## 4. Typography

### 폰트
- Korean: Pretendard, Noto Sans KR, sans-serif
- Japanese: Noto Sans JP, sans-serif
- English: Inter, Pretendard, sans-serif

### Desktop 기준
- Site Logo/Text: 22px / 800
- Nav: 15px / 600
- H1: 44px / 800~900 / line-height 1.15
- H2: 30px / 800 / line-height 1.3
- H3: 20px / 700
- Body Large: 18px / 500
- Body: 15~16px / 400~500 / line-height 1.7
- Caption: 13px / 400

### Mobile
- H1: 32px
- H2: 24px
- H3: 18px
- Body: 14~15px

---

## 5. Header
- 흰 배경
- 하단 1px 연한 border 또는 아주 약한 shadow
- 사이트명 좌측 고정
- 메뉴 우측 정렬
- 메뉴 기본 Navy, Hover/Active Blue
- Active underline 3px
- Desktop 메뉴 높이는 Header 내부 수직 중앙 정렬
- Mobile은 햄버거 메뉴 사용

### 금지
- 페이지별로 사이트명 크기 변경
- 문의하기만 다른 Header 사용
- 메뉴가 Footer에 반복 노출

---

## 6. HERO
- 모든 페이지 동일 컴포넌트
- 공통 배경 이미지를 사용하되 페이지 제목/설명만 변경
- 배경 위에 White→transparent Blue gradient 적용
- 좌측 콘텐츠와 우측 Key Message의 기준선을 맞춘다.

### 권장 그리드
```css
.page-hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 48px;
  align-items: center;
  min-height: var(--hero-h);
}
```

### Mobile
- 우측 메시지는 제목/설명 아래에 배치
- 배경은 중앙 또는 우측 중심 crop
- 텍스트 대비 확보를 위해 overlay 강화

---

## 7. 카드 / 인포그래픽

### 기본 카드
```css
.card {
  background: #fff;
  border: 1px solid #cfe3f8;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(13, 43, 98, .06);
}
```

### 내부 패딩
- Desktop: 22~24px
- Tablet: 18~20px
- Mobile: 16px

### 이미지
- 카드 상단 또는 좌측
- `aspect-ratio` 지정
- `object-fit: cover`
- 이미지 위에 본문 텍스트를 합성하지 않음

### 섹션 제목
- Navy 또는 페이지 강조색
- 장식선/아이콘은 최소화
- 지나친 그림자/gradient 금지

---

## 8. 페이지별 강조색
- 기업개요: Navy / Blue 중심 + Green/Purple 보조
- AI구축사례: 사례별 카테고리 색상
- AI주차장: Navy / Blue / Teal
- AI스마트팜: Green / Navy
- AI관광: Blue / Orange / Purple
- 문의하기: Japan Red 포인트 / Korea Blue 포인트, 전체 프레임은 Navy/Blue

---

## 9. 이미지 디자인 규칙

### 최종 이미지 포맷
- 사진: WebP
- 아이콘/로고/지도: SVG 우선

### 비율
- 일반 카드: 3:2 또는 4:3
- 와이드 섹션: 2:1
- HERO: 1920×500 계열
- 이미지에 글자·번호·파일명·워터마크 넣지 않음

### 현재 콜라주 에셋
AI주차장 / AI스마트팜 / AI관광 제작 원본은 최종 페이지에서 통이미지로 사용하지 않는다. 개별 장면으로 분리한 후 카드/섹션에 배치한다.

---

## 10. 반응형 설계

### 1200px 이상
- 시안과 가장 유사한 풀 레이아웃
- 3열 카드 허용

### 1024~1199px
- 3열 유지 가능하나 카드 최소폭이 부족하면 2열
- Header 메뉴 간격 축소

### 768~1023px
- 3열 → 2열
- 복잡한 흐름도는 2열/세로 혼합

### 767px 이하
- 모든 주요 카드 1열
- Header 햄버거
- 좌우 이미지+텍스트는 상하 스택
- 프로세스 화살표는 세로 방향
- 30일 일정은 1열 리스트

---

## 11. Footer
- 모든 페이지 동일 컴포넌트
- 최소 높이 180px(Desktop)
- 사이트명/슬로건 + Copyright만 사용
- Footer 메뉴 제거 상태 유지
- 배경은 Navy 또는 시안과 동일한 연한/진한 조합을 페이지 전체에서 통일

---

## 12. 상태 및 인터랙션
- 링크 Hover: 150~200ms 색상 transition
- 카드 Hover는 필요한 경우 `translateY(-2px)` 이내
- 과도한 animation 금지
- 모바일 메뉴는 200ms 내외 slide/fade
- `prefers-reduced-motion` 대응 권장

---

## 13. 디자인 검수 체크리스트
- [ ] 6개 Header 높이 동일
- [ ] 6개 HERO 높이 동일
- [ ] 6개 Footer 높이 동일
- [ ] 기업개요 기준 콘텐츠 폭 동일
- [ ] Footer에 메뉴 없음
- [ ] 이미지에 텍스트/파일명 없음
- [ ] 모바일에서 카드 1열 전환 정상
- [ ] 일본어/한국어 혼합 시 글꼴 깨짐 없음
- [ ] 시안 콘텐츠 누락 없음
