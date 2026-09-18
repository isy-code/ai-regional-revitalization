# AI 지역경제 전문 컨설팅 기업 — 웹사이트

첨부된 6개 시안과 `docs/` 문서 세트를 기준으로 구현한 **정적 HTML / CSS / Vanilla JavaScript 웹사이트**다.

## 구현 방식
- 정적 HTML 6페이지 (프레임워크·빌드 스텝 없음)
- CSS3 + Vanilla JavaScript
- DB / API / CMS / JSON 콘텐츠 로딩 없음 — 콘텐츠는 각 HTML에 직접 작성
- 공통 Header / HERO / Footer 디자인 통일
- 반응형 PC / Tablet / Mobile (375 / 768 / 1024 / 1440 검수)
- GitHub → Vercel 정적 배포

## 페이지

| 메뉴 | 파일 | 콘텐츠 원본 |
|---|---|---|
| 기업개요 | `index.html` | `docs/company_content.md` |
| AI구축사례 | `cases.html` | `docs/cases_content.md` |
| AI주차장 | `parking.html` | `docs/parking_content.md` |
| AI스마트팜 | `smartfarm.html` | `docs/smartfarm_content.md` |
| AI관광 | `tourism.html` | `docs/tourism_content.md` |
| 문의하기 | `contact.html` | `docs/contact_content.md` |

## 디렉터리 구조

```text
/
├─ index.html · cases.html · parking.html · smartfarm.html · tourism.html · contact.html
├─ favicon.ico · favicon.svg · robots.txt · sitemap.xml
├─ assets/
│  ├─ css/    reset · common · components · pages · responsive
│  ├─ js/     common.js (모바일 메뉴 토글 전용)
│  ├─ icons/  icons.svg (SVG 스프라이트 원본)
│  └─ images/ common · company · cases · parking · smartfarm · tourism · contact (WebP)
├─ docs/       PRD · DESIGN · DEVELOPMENT · PAGE_SPEC · IMAGE_MAP · *_content.md 등
└─ references/ 시안 6종
```

## 아이콘 처리
`assets/icons/icons.svg` 가 SVG 스프라이트 원본이다. 외부 SVG 참조(`<use href="file.svg#id">`)에 의존하지 않도록
각 HTML 의 `<!--@ICONS@START--> … <!--@ICONS@END-->` 구간에 동일한 스프라이트를 인라인으로 복제해 두었다.

**아이콘을 수정할 때는 `assets/icons/icons.svg` 만 고치고, 6개 HTML 의 주입 구간을 같은 내용으로 교체한다.**

## 이미지 처리
- 모든 사진은 WebP 로 변환했다.
- AI주차장 · AI스마트팜 · AI관광의 콜라주 제작 원본은 흰 여백(거터)을 기준으로 개별 장면으로 분리한 뒤
  `docs/IMAGE_MAP.md` 의 목표 파일명으로 저장했다. 최종 UI 에 콜라주 통이미지는 사용하지 않는다.
- HERO 배경은 `loading="lazy"` 를 쓰지 않고 `fetchpriority="high"` 를 지정한다. 본문 이미지는 전부 lazy loading.

## 로컬 확인
정적 파일이므로 각 HTML 을 브라우저로 바로 열어도 동작한다.

## 배포
Vercel — Framework Preset `Other`, Build Command 없음, Output Directory 는 저장소 루트.
`vercel.json` 은 필요하지 않다. 자세한 내용은 `docs/DEPLOYMENT.md`.

## 남은 확인 사항
`docs/ASSET_CHECKLIST.md` 의 미완료 항목을 참고한다. 특히 **나가오카대학 / Vision Inside 공식 로고**와
**문의처 정보 최종 검수**는 담당자 확인이 필요하다.

## 원칙 (변경 금지)
- 시안과 `docs/*_content.md` 의 내용을 임의로 줄이거나 재작성하지 않는다.
- 전체 시안을 이미지 한 장으로 붙이지 않는다.
- 텍스트는 HTML, 배치는 CSS, 기능 아이콘은 SVG, 사진만 이미지로 구현한다.
- 기업개요 페이지를 공통 레이아웃 기준으로 사용한다.
- Footer 에는 메뉴를 넣지 않는다.
- AI 생성 이미지를 공식 기관 로고처럼 사용하지 않는다.
