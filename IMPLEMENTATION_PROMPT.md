# Codex / Claude Code 시작 프롬프트

아래 문구를 구현 시작 시 그대로 사용할 수 있다.

---

이 프로젝트를 첨부된 6개 시안과 문서 기준으로 구현해줘.

먼저 구현하지 말고 다음 문서를 모두 읽고 요구사항을 정리해:
- AGENTS.md 또는 CLAUDE.md
- docs/AI_INSTRUCTIONS.md
- docs/00_DECISIONS.md
- docs/PRD.md
- docs/DESIGN.md
- docs/DEVELOPMENT.md
- docs/PAGE_SPEC.md
- docs/IMAGE_MAP.md
- docs/ASSET_CHECKLIST.md
- docs/company_content.md
- docs/cases_content.md
- docs/parking_content.md
- docs/smartfarm_content.md
- docs/tourism_content.md
- docs/contact_content.md
- docs/QA_CHECKLIST.md

그 후 `docs/IMPLEMENTATION_PLAN.md` 순서대로 구현해.

제약사항:
- 정적 HTML/CSS/Vanilla JavaScript만 사용
- DB/API/CMS/JSON 콘텐츠 로딩 사용 금지
- React/Next.js/Vue 등 프레임워크 사용 금지
- content.md 문구 임의 수정/축약 금지
- 시안에 없는 콘텐츠 임의 추가 금지
- 모든 페이지의 Header/HERO/Footer 규격 통일
- Footer 메뉴 금지
- 전체 시안을 이미지로 붙이는 구현 금지
- 아이콘은 로컬 SVG 사용
- 사진은 최종적으로 WebP 사용
- 모바일 375px까지 대응

먼저 공통 레이아웃을 만든 뒤 페이지별로 구현하고, 마지막에는 QA 체크리스트를 모두 확인해. 수정한 파일과 남은 TODO를 마지막에 요약해줘.

---
