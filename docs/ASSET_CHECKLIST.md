# ASSET_CHECKLIST – 에셋 준비 현황

## 1. 준비 완료
- [x] 기업개요 대표 이미지 7종
- [x] AI구축사례 대표 이미지 6종
- [x] AI주차장 제작 원본 콜라주
- [x] AI스마트팜 제작 원본 콜라주
- [x] AI관광 제작 원본 콜라주
- [x] 문의하기 보조 이미지 4종
- [x] 공통 이미지 3종
- [x] `content.md` 6개
- [x] `PRD.md`
- [x] `DESIGN.md`
- [x] `DEVELOPMENT.md`
- [x] `IMAGE_MAP.md`

---

## 2. 구현 시 처리 완료
- [x] AI주차장 콜라주를 독립 이미지로 분리 (10종 — `IMAGE_MAP.md` 목표 8종 + `parking-cctv` / `parking-spaces`)
- [x] AI스마트팜 콜라주를 독립 이미지로 분리 (9종 — 목표 8종 + `smartfarm-drone`)
- [x] AI관광 콜라주를 독립 이미지로 분리 (11종 — 목표 8종 + `tourism-region` / `tourism-kiosk` / `tourism-ar-guide`)
- [x] 모든 PNG 를 WebP 로 변환 (총 51개 / 약 4.8MB)
- [ ] 나가오카대학 공식 로고 확보 → `assets/logos/nagaoka-university-logo.svg`
- [ ] Vision Inside 공식 로고 확보 → `assets/logos/vision-inside-logo.svg`
- [ ] 문의처 정보 최종 검수 (담당자 확인 필요)

> 로고 2종은 AI 생성 이미지를 사용하지 않는다는 원칙에 따라 **아직 적용하지 않았다.**
> 현재 `contact.html` 은 기관명을 텍스트 워드마크로 표기하고, 해당 위치에 `TODO(에셋)` 주석을 남겨 두었다.
> 공식 원본 파일을 받으면 `assets/logos/` 에 넣고 `.org-mark` 블록을 교체한다.

---

## 3. 배포 전 필수
- [x] `favicon.ico`
- [x] `favicon.svg`
- [x] `og-image.webp` 1200×630
- [x] `robots.txt`
- [x] `sitemap.xml`
- [x] 페이지별 title/description
- [x] 이미지 alt text (모든 `<img>` 에 alt 존재)
- [x] 375/768/1024/1440 반응형 검수 — 가로 overflow 없음
- [x] Header/HERO/Footer 동일 크기 확인
- [x] Footer 메뉴가 없는지 확인
- [x] 링크/이미지 404 검사 (로컬 참조 누락 0건)
- [ ] 배포 도메인 확정 후 `sitemap.xml` / `robots.txt` / `og:image` 절대 URL 갱신

---

## 4. 이미지 파일 목록 (구현 기준)

### common
`common-hero-city.webp` (공통 HERO) · `common-korea-japan-network.webp` · `common-nagaoka-landscape.webp` · `og-image.webp`

### company
`company-manufacturing` · `company-smartfarm` · `company-tourism` · `company-bio-container` ·
`company-office-ai` · `company-ai-education` · `company-nagaoka`

### cases
`case-manufacturing` · `case-smartfarm` · `case-bio-container` · `case-tourism` ·
`case-smart-parking` · `case-ai-office`

### parking
`parking-before` · `parking-after` · `parking-layout` · `parking-lpr-camera` · `parking-cctv` ·
`parking-payment` · `parking-dashboard` · `parking-installation` · `parking-spaces` · `parking-mobile-app`

### smartfarm
`smartfarm-greenhouse` · `smartfarm-drone` · `smartfarm-field-iot` · `smartfarm-data-analysis` ·
`smartfarm-food-factory` · `smartfarm-robot-harvest` · `smartfarm-ai-control` · `smartfarm-products` ·
`smartfarm-experience`

### tourism
`tourism-snow-sake-hero` · `tourism-ski` · `tourism-onsen` · `tourism-sake` · `tourism-food` ·
`tourism-culture` · `tourism-accommodation` · `tourism-ai-concierge` · `tourism-region` ·
`tourism-kiosk` · `tourism-ar-guide`

### contact
`contact-nagaoka-university` · `contact-vision-inside-building` · `contact-city-skyline` ·
`contact-korea-japan-network`

---

## 5. 최종 구현 원칙
1. 텍스트·표·숫자는 `content.md` 기준으로 보존한다.
2. 시안 전체를 한 장의 이미지로 사용하지 않는다.
3. 콜라주 이미지는 최종 UI 에서 독립 이미지로 분리해 사용한다.
4. 공통 Header/HERO/Footer 는 기업개요 기준으로 통일한다.
5. 데이터베이스·JSON 없이 정적 HTML 에 콘텐츠를 직접 작성한다.
