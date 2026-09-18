# PAGE_SPEC — 페이지별 구현 명세

공통 텍스트는 각 `*_content.md`를 사용한다. 이 문서는 **섹션 순서, UI 유형, 이미지 매칭**을 지정한다.

## 공통
- Header → HERO → Main → Footer
- Main container 최대 1120px
- 페이지 section 간격 Desktop 56px
- 각 페이지의 첫 화면 구조 동일
- 메뉴 active 상태만 페이지별 변경

---

## 1. 기업개요 — `index.html`

| 순서 | 섹션 | UI | 주요 이미지 |
|---:|---|---|---|
| 1 | HERO | 공통 HERO | `common-hero-city.webp` |
| 2 | 기업 구조도 | 중앙 허브 + 연결 카드 | 아이콘 중심 |
| 3 | 기업 개요 | 설명 + 핵심 역할 카드 | 아이콘 |
| 4 | NIIGATA AI ECONOMY ALLIANCE | 네트워크 다이어그램 | 아이콘 |
| 5 | Consulting / Operating / Platform | 3열 카드 | 아이콘 |
| 6 | 핵심 운영 가치 | 5개 카드 | 아이콘 |
| 7 | Flagship Projects | 3×2 미디어 카드 | company 이미지 6종 |
| 8 | Korea-Niigata Business Center | KOREA ↔ NIIGATA 연결 구조 | 네트워크 이미지 선택 |
| 9 | 한·일 협력 모델 | 3단계 flow | 아이콘 |
| 10 | 추진 프로세스 | 단계형 timeline | 아이콘 |
| 11 | 조직 운영 체계 | 조직도 | 아이콘 |
| 12 | 기대 효과 | stat/benefit cards | 아이콘 |
| 13 | 로드맵 | horizontal timeline | 아이콘 |
| 14 | 핵심 파트너 | partner grid | 아이콘/텍스트 |
| 15 | 핵심 자산 | 5개 카드 | 아이콘 |
| 16 | 하단 메시지 | wide visual banner | `company-nagaoka.webp` |

---

## 2. AI구축사례 — `cases.html`

- HERO
- 6개 주요 프로젝트: 3×2 카드(모바일 1열)
- 각 카드는 이미지 + 번호/제목 + 주요 내용 + 효과
- 한일 비즈니스센터
- 협업 프로세스: 니즈 발굴 → 제안/기획 → 공동 PoC → 사업화 → 시장 확대
- 기대 효과
- 추진 로드맵
- AI 지역경제 에코시스템
- 네트워크 & 파트너십

이미지: `assets/images/cases/` 6종.

---

## 3. AI주차장 — `parking.html`

- HERO
- 사업 개요
- Before / After 2열 비교
- 활용 공간/구조
- 시스템 구성도
- 주요 기능 5개 카드
- 운영 및 수익 모델
- 구축 절차 7단계
- 기술 적용 요소
- 운영 대시보드
- 현장 설치 예시

### 이미지 배치
- Before/After: `parking-before.webp`, `parking-after.webp`
- 전체 구조: `parking-layout.webp`
- 시스템 카드: `parking-lpr-camera.webp`, `parking-payment.webp`
- 운영 화면: `parking-dashboard.webp`
- 사용자 앱: `parking-mobile-app.webp`
- 설치: `parking-installation.webp`

---

## 4. AI스마트팜 — `smartfarm.html`

- HERO
- 지역 자원
- Micro Food Factory Network
- 5개 거점 카드
- 생산·가공 A~E 프로세스
- NIIGATA FOOD CLOUD
- 유통/판매
- 공동 브랜드/Wellness
- 체험/교육
- 지역경제 효과
- 운영 모델
- 확장 전략
- 핵심 가치

### 이미지
`smartfarm-greenhouse.webp`, `smartfarm-field-iot.webp`, `smartfarm-robot-harvest.webp`, `smartfarm-data-analysis.webp`, `smartfarm-ai-control.webp`, `smartfarm-food-factory.webp`, `smartfarm-products.webp`, `smartfarm-experience.webp`.

---

## 5. AI관광 — `tourism.html`

- HERO
- NAGAOKA SNOW & SAKE 30 소개
- 주요 지역/스키장
- 상품 콘셉트
- 4주 테마
- DAY 1~30 상세 일정
- 숙소 & 거점
- AI Concierge
- 포함 사항
- 추천 대상
- 지속가능 여행

### 일정 UI
- Desktop: week grouping + day cards/timeline
- Tablet: 2열 또는 1열
- Mobile: 1열 sequential list
- DAY 문구 자체는 변경 금지

### 이미지
`snow-sake-hero`, `ski`, `onsen`, `sake`, `food`, `culture`, `accommodation`, `ai-concierge` 8종.

---

## 6. 문의하기 — `contact.html`

- HERO
- CONTACT 일본어 소개
- 일본측 문의처 카드
- 한국측 문의처 카드
- 주요 문의 분야 7개 카드
- 하단 협력 메시지

### 이미지
- `contact-nagaoka-university.webp`
- `contact-vision-inside-building.webp`
- `contact-city-skyline.webp`
- `contact-korea-japan-network.webp`
- 공식 로고 2종 SVG

### 주의
전화번호/팩스/이메일/주소/담당자는 `contact_content.md`를 그대로 사용하고 임의 formatting 변경 금지.
