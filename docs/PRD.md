# PRD – AI 지역경제 전문 컨설팅 기업 웹사이트

## 1. 문서 목적
본 문서는 첨부된 6개 시안을 기준으로 **정적 HTML/CSS/Vanilla JavaScript** 웹사이트를 구현하기 위한 최종 제품 요구사항이다. DB, CMS, API, JSON 콘텐츠 로딩 없이 각 HTML 파일에 실제 콘텐츠를 직접 작성한다.

---

## 2. 프로젝트 범위

### 사이트 목적
- AI 기반 지역경제 컨설팅 기업의 비전·조직·사업 구조 소개
- 대표 AI 구축사례 소개
- AI 주차장 / AI 스마트팜 / AI 관광 사업 상세 소개
- 한국·일본 담당자 문의처 제공

### 구현 범위
- 6개 정적 HTML 페이지
- 공통 Header / HERO / Footer
- 반응형 PC / Tablet / Mobile
- CSS Grid / Flexbox 기반 인포그래픽 재구성
- SVG 아이콘 사용
- 이미지 WebP 최적화
- 기본 SEO / OG / favicon / sitemap / robots

### 범위 제외
- DB
- 관리자/CMS
- 회원가입/로그인
- 서버 API
- 문의 폼 전송
- 결제/예약
- 외부 데이터 실시간 연동
- 콘텐츠 JSON 분리

---

## 3. 사이트맵

| 메뉴 | HTML | 콘텐츠 원본 |
|---|---|---|
| 기업개요 | `index.html` | `docs/company_content.md` |
| AI구축사례 | `cases.html` | `docs/cases_content.md` |
| AI주차장 | `parking.html` | `docs/parking_content.md` |
| AI스마트팜 | `smartfarm.html` | `docs/smartfarm_content.md` |
| AI관광 | `tourism.html` | `docs/tourism_content.md` |
| 문의하기 | `contact.html` | `docs/contact_content.md` |

---

## 4. 콘텐츠 보존 원칙

1. 시안과 `content.md`의 제목·설명·표·숫자·단계명은 임의 수정하지 않는다.
2. 텍스트는 HTML로 구현하고 이미지 안에 합성하지 않는다.
3. 줄바꿈은 반응형에 맞게 조정할 수 있으나 내용은 바꾸지 않는다.
4. 구현 중 문구 충돌이 있으면 해당 페이지의 `content.md`를 우선한다.
5. 이미지 파일명·사용 위치는 `IMAGE_MAP.md`를 기준으로 한다.
6. 연락처와 공식 로고는 배포 전 최종 검수한다.

---

## 5. 공통 UI 요구사항

### Header
- Desktop 기준 높이: **72px 고정**
- 6개 페이지 모두 동일한 마크업·높이·좌우 정렬 사용
- 좌측: `AI 지역경제 전문 컨설팅 기업`
- 우측 메뉴: 기업개요 / AI구축사례 / AI주차장 / AI스마트팜 / AI관광 / 문의하기
- 활성 메뉴: Blue + 3px underline
- Mobile: 햄버거 버튼, 세로 메뉴 패널

### HERO
- Desktop 기준 최소 높이: **220px**
- 6개 페이지 동일 높이
- 좌측: 페이지 제목 + 설명
- 우측: `Local AI / Global Impact` + 공통 메시지
- 공통 배경 사용
- 페이지별 HERO 높이를 콘텐츠 양에 맞춰 변경하지 않는다.

### Main
- Desktop 최대 콘텐츠 폭: **1120px**
- 본문은 시안의 카드·표·흐름도를 HTML/CSS로 재구성
- 섹션 간 기본 간격: 56px
- 사진은 독립 이미지, 아이콘은 SVG

### Footer
- Desktop 기준 최소 높이: **180px**
- 모든 페이지 동일 구조·높이·패딩
- Footer 내 메뉴 없음
- 페이지 본문이 짧아도 Footer 자체 높이를 변경하지 않는다.

---

## 6. 반응형 요구사항

### Breakpoints
- Desktop: `1200px 이상`
- Small Desktop / Tablet Landscape: `1024~1199px`
- Tablet: `768~1023px`
- Mobile: `767px 이하`

### 재배치 규칙
- 3열 → 1024px 이하 2열 → 767px 이하 1열
- 2열 → 767px 이하 1열
- 좌우 이미지/텍스트 → 모바일에서 시안 정보 순서에 따라 상하 배치
- 프로세스/타임라인 → 모바일 세로 흐름
- 큰 표는 가능한 경우 카드형으로 전환; 데이터 구조상 어려운 표만 가로 스크롤 허용
- 텍스트가 이미지 안에 들어가지 않도록 유지

---

## 7. 페이지별 필수 섹션

### 기업개요
HERO → 구조도 → 기업 개요 → NIIGATA AI ECONOMY ALLIANCE → Consulting/Operating/Platform → 핵심 운영 가치 → Flagship Projects 6개 → Korea-Niigata Business Center → 한·일 협력 모델 → 추진 프로세스 → 조직 운영 체계 → 기대 효과 → 로드맵 → 핵심 파트너 → 핵심 자산 → 하단 메시지

### AI구축사례
HERO → 6개 구축사례 → 한일 비즈니스센터 → 협업 프로세스 → 기대 효과 → 추진 로드맵 → AI 지역경제 에코시스템 → 네트워크 & 파트너십

### AI주차장
HERO → 사업 개요 → Before/After → 활용 공간 → 시스템 구성 → 주요 기능 → 운영/수익 모델 → 구축 절차 → 기술 요소 → 대시보드 → 현장 설치 예시

### AI스마트팜
HERO → 지역 자원 → Micro Food Factory 5개 거점 → 생산·가공 A~E → NIIGATA FOOD CLOUD → 유통/판매 → 공동 브랜드 → 체험/교육 → 경제효과 → 운영 모델 → 확장 전략

### AI관광
HERO → NAGAOKA SNOW & SAKE 30 → 개요 → 주요 지역/스키장 → 콘셉트 → 4주 테마 → DAY 1~30 → 숙소 → AI Concierge → 포함 사항 → 추천 대상 → 지속가능 여행

### 문의하기
HERO → CONTACT 소개 → 일본 문의처 → 한국 문의처 → 주요 문의 분야 → 한일 협력 메시지

---

## 8. 이미지 및 에셋 요구사항

### 최종 포맷
- 사진: WebP
- 로고/아이콘/간단 지도: SVG 우선
- OG 이미지: WebP 또는 JPG

### 권장 규격
| 용도 | 권장 크기 |
|---|---:|
| 공통 HERO | 1920×500 |
| 일반 카드 | 1200×800 |
| 가로형 콘텐츠 | 1200×600 |
| 작은 카드 | 800×600 |
| CTA/하단 배너 | 1600×500 |
| OG Image | 1200×630 |

### 중요
현재 AI주차장·AI스마트팜·AI관광의 일부 제작 원본은 콜라주 형태다. 최종 구현에서는 `IMAGE_MAP.md`의 목표 파일명대로 독립 이미지로 분리한 뒤 사용한다.

---

## 9. SEO / 배포 기본 파일

필수:
- `favicon.ico`
- `favicon.svg`
- `og-image.webp`
- `robots.txt`
- `sitemap.xml`

각 페이지 `<head>`:
- 고유 `<title>`
- `meta description`
- Open Graph title / description / image
- viewport
- charset UTF-8

---

## 10. 접근성 요구사항
- 모든 의미 있는 이미지에 구체적인 `alt`
- 장식 이미지는 `alt=""`
- 네비게이션에 `aria-label`
- 햄버거 버튼에 `aria-expanded`, `aria-controls`
- 키보드로 모든 메뉴 접근 가능
- 텍스트 대비 WCAG AA 수준 지향
- 색상만으로 상태를 구분하지 않음

---

## 11. 성능 요구사항
- 이미지 WebP 변환
- 카드 이미지 `loading="lazy"`
- HERO/LCP 이미지는 lazy 제외
- 이미지 `width`/`height` 명시해 CLS 방지
- 불필요한 외부 JS 프레임워크 사용 금지
- SVG 아이콘은 로컬 에셋 우선

---

## 12. 완료 조건(Acceptance Criteria)
- 6개 페이지 Header/HERO/Footer 크기가 육안상 동일
- 기업개요 시안을 기준으로 전체 페이지의 콘텐츠 폭과 공통 여백 통일
- 시안의 콘텐츠가 누락되지 않음
- 모바일 375px에서 가로 넘침 없음
- 768px / 1024px / 1440px에서 레이아웃 정상
- 이미지 왜곡 없음(`object-fit: cover`)
- Footer에 메뉴 없음
- 모든 내부 메뉴 링크 정상
- 공식 연락처·로고 최종 검수 완료
- 콘솔 오류 없음
