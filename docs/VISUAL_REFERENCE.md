# VISUAL_REFERENCE — 시안 파일 관리

Codex/Claude가 시안과 구현 결과를 비교할 수 있도록 6개 이미지를 `references/` 폴더에 넣는 것을 권장한다.

권장 파일명:
```text
references/
├─ 01-company-overview.png
├─ 02-ai-cases.png
├─ 03-ai-parking.png
├─ 04-ai-smartfarm.png
├─ 05-ai-tourism.png
└─ 06-contact.png
```

## 비교 기준
- 시안은 **콘텐츠 순서와 비주얼 계층의 기준**이다.
- exact pixel dimensions 자체보다 header/hero/footer 일치, section rhythm, card grouping, 이미지 비율을 우선한다.
- 시안 텍스트와 content 문서가 다르면 content 문서의 텍스트를 사용한다.
- 모바일 레이아웃은 desktop 시안을 단순 축소하지 않고 `DESIGN.md` 규칙대로 재배치한다.

## 브라우저 캡처가 가능한 AI 도구
가능하면 다음 viewport에서 구현 화면을 저장해 비교한다.
- 1440×900
- 1024×768
- 768×1024
- 375×812
