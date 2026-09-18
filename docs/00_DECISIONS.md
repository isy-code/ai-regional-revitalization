# 00_DECISIONS — 확정된 구현 결정

이 문서는 구현 중 변경하지 않는 **잠금 결정(Locked Decisions)** 을 정의한다.

## 기술
- 정적 HTML5
- CSS3
- Vanilla JavaScript
- 별도 서버 없음
- DB 없음
- API 없음
- CMS 없음
- JSON 콘텐츠 파일 없음
- 콘텐츠는 HTML에 직접 작성
- build step은 기본적으로 없음

## 페이지
- 기업개요: `index.html`
- AI구축사례: `cases.html`
- AI주차장: `parking.html`
- AI스마트팜: `smartfarm.html`
- AI관광: `tourism.html`
- 문의하기: `contact.html`

## 공통 UI
- 기업개요 시안을 공통 기준으로 사용
- Desktop Header: 72px
- Desktop HERO 최소 높이: 220px
- Desktop Footer 최소 높이: 180px
- 최대 콘텐츠 폭: 1120px
- Footer에 메뉴 없음
- 6개 페이지 Header/HERO/Footer 구조와 크기 통일

## 콘텐츠
- `*_content.md`가 화면 텍스트의 원본
- 문구/숫자/단계/기관명/연락처 임의 변경 금지
- 줄바꿈과 배치는 responsive 목적에서만 변경 가능

## 이미지
- 최종 사진 포맷: WebP
- 로고/아이콘/간단 지도: SVG 우선
- 이미지 안에 텍스트, 번호, 파일명 삽입 금지
- 콜라주 이미지는 최종 UI에 사용 금지
- 공식 기관 로고는 실제 원본만 사용

## 반응형
- >=1200: Desktop
- 1024~1199: Small Desktop
- 768~1023: Tablet
- <=767: Mobile
- 3열 → 2열 → 1열
- 복잡한 가로 프로세스는 모바일에서 세로화

## 배포
- GitHub 저장소 기반
- Vercel 정적 배포 권장
