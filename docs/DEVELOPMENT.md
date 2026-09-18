# DEVELOPMENT – AI 지역경제 전문 컨설팅 기업 웹사이트

## 1. 개발 방식
- HTML5
- CSS3
- Vanilla JavaScript
- 정적 배포
- DB/API/CMS 없음
- 콘텐츠 JSON 없음

`content.md`는 개발 참고 원본이며 브라우저에서 런타임 로딩하지 않는다. 최종 콘텐츠는 각 HTML에 직접 작성한다.

---

## 2. 권장 폴더 구조

```text
/
├─ index.html
├─ cases.html
├─ parking.html
├─ smartfarm.html
├─ tourism.html
├─ contact.html
├─ favicon.ico
├─ favicon.svg
├─ robots.txt
├─ sitemap.xml
│
├─ assets/
│  ├─ css/
│  │  ├─ reset.css
│  │  ├─ common.css
│  │  ├─ components.css
│  │  ├─ pages.css
│  │  └─ responsive.css
│  ├─ js/
│  │  └─ common.js
│  ├─ images/
│  │  ├─ common/
│  │  ├─ company/
│  │  ├─ cases/
│  │  ├─ parking/
│  │  ├─ smartfarm/
│  │  ├─ tourism/
│  │  └─ contact/
│  ├─ icons/
│  └─ logos/
│
└─ docs/
   ├─ PRD.md
   ├─ DESIGN.md
   ├─ DEVELOPMENT.md
   ├─ IMAGE_MAP.md
   ├─ ASSET_CHECKLIST.md
   └─ *_content.md
```

---

## 3. 공통 HTML 원칙
- Semantic HTML 사용: `header`, `nav`, `main`, `section`, `footer`
- 페이지당 `h1` 1개
- 주요 섹션 `h2`, 카드 제목 `h3`
- 실제 텍스트는 HTML에 직접 작성
- 시안 전체 캡처를 통이미지로 삽입 금지
- `<br>`로 레이아웃을 강제하지 않고 CSS 폭으로 자연스럽게 줄바꿈

---

## 4. 공통 Header / Footer 일치 방법
정적 HTML이므로 Header/Footer 마크업은 각 파일에 동일하게 복제한다. 공통 CSS는 한 파일에서 관리한다.

### Header
```html
<header class="site-header">
  <div class="site-header__inner container">
    <a class="site-brand" href="index.html">AI 지역경제 전문 컨설팅 기업</a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">...</button>
    <nav id="site-nav" class="site-nav" aria-label="주요 메뉴">
      <a href="index.html">기업개요</a>
      <a href="cases.html">AI구축사례</a>
      <a href="parking.html">AI주차장</a>
      <a href="smartfarm.html">AI스마트팜</a>
      <a href="tourism.html">AI관광</a>
      <a href="contact.html">문의하기</a>
    </nav>
  </div>
</header>
```

현재 페이지 링크에 `.is-active`를 직접 지정한다.

### Footer
Footer에는 메뉴를 넣지 않는다. 모든 페이지에서 같은 마크업을 그대로 사용한다.

---

## 5. 공통 CSS 핵심값

```css
:root {
  --container: 1120px;
  --header-h: 72px;
  --hero-h: 220px;
  --footer-h: 180px;
  --navy: #082b64;
  --blue: #0b63ce;
  --accent-blue: #1677ff;
  --bg: #f6fafe;
  --border: #bfd9f5;
  --text: #0b2554;
}

.container {
  width: min(var(--container), calc(100% - 48px));
  margin-inline: auto;
}

.site-header { min-height: var(--header-h); }
.page-hero { min-height: var(--hero-h); }
.site-footer { min-height: var(--footer-h); }
```

Mobile에서 `.container`는 `calc(100% - 32px)` 사용.

---

## 6. HERO 구현
공통 HTML 구조를 6개 페이지에서 동일하게 사용한다.

```html
<section class="page-hero">
  <div class="page-hero__inner container">
    <div class="page-hero__copy">
      <h1>페이지 제목</h1>
      <p>페이지 설명</p>
    </div>
    <div class="page-hero__message">
      <strong>Local AI<br>Global Impact</strong>
      <p>지역의 가능성이<br>세계를 이어가는<br>더 나은 미래를 만듭니다.</p>
    </div>
  </div>
</section>
```

공통 HERO 배경은 `IMAGE_MAP.md` 지정 파일 사용.

---

## 7. 컴포넌트 클래스 권장
- `.section`
- `.section-heading`
- `.card`
- `.card-grid`
- `.media-card`
- `.feature-list`
- `.process-flow`
- `.timeline`
- `.stat-card`
- `.contact-card`
- `.tag`
- `.badge`

페이지별 클래스는 공통 컴포넌트를 덮어쓰는 최소 범위로 사용한다.

---

## 8. 이미지 처리

### 개발 전 처리
1. 원본 PNG 확인
2. 필요한 장면 독립 파일로 crop/export
3. WebP 변환
4. 최종 파일명을 `IMAGE_MAP.md`에 맞춤
5. `width` / `height` 또는 `aspect-ratio` 지정

### HTML 예시
```html
<img
  src="assets/images/cases/case-smartfarm.webp"
  width="1200"
  height="800"
  alt="AI 기반 스마트농업 구축 사례"
  loading="lazy"
>
```

### LCP
HERO 또는 첫 화면 핵심 이미지는 `loading="lazy"` 사용 금지. 필요 시 `fetchpriority="high"` 사용.

---

## 9. 콜라주 이미지 처리 규칙
현재 다음 원본은 최종 UI 통이미지로 사용하지 않는다.
- `ai-parking-images-clean.png`
- `ai-smartfarm-images-clean.png`
- `ai-tourism-images-clean.png`

각 장면을 독립 WebP로 분리하고 `IMAGE_MAP.md`의 목표 이름으로 저장한다. 개발 초기에는 임시 placeholder로 사용할 수 있으나 최종 검수 전 반드시 교체한다.

---

## 10. 반응형 CSS

```css
@media (max-width: 1199px) { }
@media (max-width: 1023px) { }
@media (max-width: 767px) { }
```

### Mobile 핵심
- Header 64px
- nav drawer/expand
- 1열 카드
- Hero 1열
- 섹션 padding 축소
- 프로세스 세로화
- 가로 넘침 금지

---

## 11. 모바일 메뉴 JavaScript
`common.js`는 메뉴 토글 정도만 담당한다. 콘텐츠 렌더링을 JavaScript에 의존하지 않는다.

```js
const button = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

button?.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});
```

---

## 12. 접근성
- 이미지 alt 작성
- 버튼과 링크 focus-visible 스타일
- 햄버거 aria 속성
- Decorative SVG `aria-hidden="true"`
- Skip link 권장
- 표는 `<table>` + `<th>` 사용

---

## 13. SEO `<head>` 템플릿

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>기업개요 | AI 지역경제 전문 컨설팅 기업</title>
<meta name="description" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="/assets/images/common/og-image.webp">
<link rel="icon" href="/favicon.ico">
```

페이지별 title/description만 변경한다.

---

## 14. 배포 전 검수

### Layout
- [ ] Header 6개 동일
- [ ] HERO 6개 동일
- [ ] Footer 6개 동일
- [ ] 콘텐츠 max-width 동일

### Content
- [ ] `content.md` 전 항목 반영
- [ ] 일본어/한국어 오탈자 확인
- [ ] 문의 연락처 최종 확인

### Assets
- [ ] 콜라주 독립 이미지 교체
- [ ] PNG → WebP
- [ ] 공식 로고 적용
- [ ] favicon/OG 준비

### Responsive
- [ ] 1440px
- [ ] 1024px
- [ ] 768px
- [ ] 375px
- [ ] 가로 스크롤 없음

### Quality
- [ ] 콘솔 오류 없음
- [ ] 깨진 링크 없음
- [ ] 이미지 404 없음
- [ ] Lighthouse 기본 점검
