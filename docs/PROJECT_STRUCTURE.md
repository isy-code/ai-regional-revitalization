# PROJECT_STRUCTURE — 최종 권장 구조

```text
/
├─ AGENTS.md
├─ CLAUDE.md
├─ README.md
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
├─ references/
│  └─ 6개 시안 이미지
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
   ├─ 00_DECISIONS.md
   ├─ AI_INSTRUCTIONS.md
   ├─ PRD.md
   ├─ DESIGN.md
   ├─ DEVELOPMENT.md
   ├─ PAGE_SPEC.md
   ├─ IMPLEMENTATION_PLAN.md
   ├─ IMAGE_MAP.md
   ├─ ASSET_CHECKLIST.md
   ├─ QA_CHECKLIST.md
   ├─ SEO_ACCESSIBILITY.md
   ├─ DEPLOYMENT.md
   ├─ VISUAL_REFERENCE.md
   ├─ PROJECT_STRUCTURE.md
   ├─ company_content.md
   ├─ cases_content.md
   ├─ parking_content.md
   ├─ smartfarm_content.md
   ├─ tourism_content.md
   └─ contact_content.md
```

## 이유
- AI 코딩 도구가 root 지침을 자동 탐색하기 쉽다.
- 사람과 AI 모두 docs에서 요구사항을 찾기 쉽다.
- 런타임에 docs 파일을 사용하지 않으므로 배포 결과에 영향이 없다.
