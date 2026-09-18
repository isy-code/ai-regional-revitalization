# CLAUDE.md — Claude Code 구현 지침

작업을 시작하기 전에 아래 문서를 순서대로 읽는다.

1. `docs/AI_INSTRUCTIONS.md`
2. `docs/00_DECISIONS.md`
3. `docs/PRD.md`
4. `docs/DESIGN.md`
5. `docs/DEVELOPMENT.md`
6. `docs/PAGE_SPEC.md`
7. `docs/IMAGE_MAP.md`
8. 각 `docs/*_content.md`
9. `docs/QA_CHECKLIST.md`

## 프로젝트 특성
이 프로젝트는 **디자인 시안 충실도가 우선인 정적 기업 사이트**다. 새로운 제품 기능을 설계하는 작업이 아니다.

## 구현 원칙
- HTML/CSS/Vanilla JS만 사용한다.
- 콘텐츠는 HTML에 직접 작성한다.
- 의미론적 마크업과 접근성을 유지한다.
- 동일한 UI 패턴은 공통 클래스로 만든다.
- 시안의 정보 구조를 보존하되 responsive 환경에서만 재배치한다.
- 문구를 개선하거나 요약하려는 시도를 하지 않는다.
- 이미지가 준비되지 않았다는 이유로 섹션을 삭제하지 않는다.

## 비주얼 검수
브라우저/스크린샷 기능이 사용 가능하면 각 페이지를 desktop과 mobile로 렌더링해 시안과 비교한다. 레이아웃 차이가 있으면 콘텐츠를 바꾸는 대신 CSS spacing, width, typography, aspect-ratio를 조정한다.

## 코드 품질
- 중복 CSS 최소화
- JS는 모바일 메뉴 등 필요한 UI 동작에 한정
- inline style 남발 금지
- 접근성 속성 유지
- 불필요한 dependency 추가 금지
