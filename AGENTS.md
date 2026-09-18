# AGENTS.md — Codex 구현 지침

이 저장소는 정적 HTML 웹사이트 구현 프로젝트다. 작업 전 반드시 `docs/AI_INSTRUCTIONS.md`와 `docs/00_DECISIONS.md`를 읽는다.

## 명령 우선순위
충돌이 있을 때 다음 순서를 따른다.
1. `docs/00_DECISIONS.md`의 확정 사항
2. 각 페이지의 `docs/*_content.md` — 실제 노출 텍스트
3. 첨부 시안 — 시각적 배치와 비율
4. `docs/DESIGN.md` — 공통 디자인 규칙
5. `docs/PAGE_SPEC.md` — 섹션 순서와 이미지 배치
6. `docs/IMAGE_MAP.md` — 파일 경로
7. `docs/DEVELOPMENT.md` — 구현 규칙

## 절대 하지 말 것
- React, Next.js, Vue, Svelte 등 프레임워크 도입
- npm/build tool을 이유 없이 추가
- DB/API/CMS/JSON 콘텐츠 로딩 추가
- 시안에 없는 섹션/카피/CTA 임의 추가
- content 문구 축약, 의역, 번역 변경
- 페이지 전체를 캡처 이미지로 구현
- Footer 메뉴 추가
- Header/HERO/Footer 크기를 페이지별로 다르게 작성
- AI 생성 기관 로고를 공식 로고처럼 사용

## 작업 방식
- `docs/IMPLEMENTATION_PLAN.md` 순서대로 구현한다.
- 공통 구조를 먼저 완성한 뒤 각 페이지를 만든다.
- 한 페이지를 완료할 때마다 `docs/QA_CHECKLIST.md`로 자체 검수한다.
- 이미지가 아직 준비되지 않은 경우 레이아웃을 먼저 구현하되 최종 경로와 aspect-ratio를 유지한다.
- 막히는 부분이 있어도 전체 구조를 임의 변경하지 말고 TODO 주석으로 명확히 남긴다.

## 완료 조건
- 6개 HTML이 모두 열림
- 375/768/1024/1440px에서 가로 overflow 없음
- 모든 내부 링크 정상
- 이미지 경로 404 없음
- 콘솔 오류 없음
- 공통 Header/HERO/Footer가 동일
- content 누락 없음
