# AI_INSTRUCTIONS — Codex / Claude 공통 지침

## 1. 목적
시안의 정보와 디자인을 훼손하지 않고, 유지보수 가능한 정적 웹사이트로 재구성한다.

## 2. 근거 자료 우선순위
1. `00_DECISIONS.md`
2. 해당 페이지 `*_content.md`
3. 사용자 제공 시안
4. `DESIGN.md`
5. `PAGE_SPEC.md`
6. `IMAGE_MAP.md`
7. `DEVELOPMENT.md`

텍스트 충돌은 content 문서를 우선하고, 레이아웃 충돌은 시안과 DESIGN 문서를 함께 본다.

## 3. 자율적으로 바꿔도 되는 것
- responsive 줄바꿈
- 카드 열 수
- 모바일에서 이미지/텍스트의 세로 재배치
- CSS 구현 방식
- 의미론적 HTML 태그
- 접근성 보완

## 4. 자율적으로 바꾸면 안 되는 것
- 페이지 수
- 메뉴명
- 페이지별 섹션 순서
- 제목/본문/숫자/프로세스 단계
- 기관명/담당자/연락처
- Header/HERO/Footer 기준 크기
- Footer 메뉴 없음 결정
- 정적 HTML 기술 방식

## 5. 시안 해석 규칙
- 시안의 텍스트를 이미지로 구현하지 않는다.
- 카드, 화살표, 단계도, 표, 배지는 HTML/CSS로 재구성한다.
- 사진 영역만 이미지 에셋을 사용한다.
- 시안의 여백과 비율을 우선 맞추고, pixel-perfect를 위해 콘텐츠 삭제를 하지 않는다.

## 6. 에셋 미완료 시
- 최종 경로를 먼저 사용한다.
- 파일이 없으면 깨진 이미지로 방치하지 말고 임시 placeholder class를 사용할 수 있다.
- 단, placeholder 때문에 섹션을 삭제하거나 순서를 바꾸지 않는다.
- 최종 검수 전에 `ASSET_CHECKLIST.md`를 확인하고 실제 에셋으로 교체한다.

## 7. 코드 작성 규칙
- 공통 스타일은 `common.css`/`components.css`
- 페이지별 예외는 `pages.css`
- breakpoint는 `responsive.css`
- JS는 `common.js` 한 곳에서 최소 사용
- BEM에 준하는 일관된 클래스명 사용 권장
- CSS Custom Properties 사용
- `!important` 남발 금지
- inline style은 긴급 예외 외 금지

## 8. 작업 완료 보고
마지막에 다음을 요약한다.
- 생성/수정 파일
- 완료 페이지
- 남은 미완료 에셋
- QA 통과 여부
- 사용자 확인이 필요한 정보
