# DEPLOYMENT — GitHub → Vercel 정적 배포

## 권장 방식
프로젝트 루트에 6개 HTML이 있는 순수 정적 사이트로 배포한다. 별도 build command가 필요하지 않다.

## 배포 전
- [ ] 상대경로/절대경로 확인
- [ ] 모든 이미지 커밋
- [ ] 대소문자 파일명 확인
- [ ] `index.html` 존재
- [ ] `robots.txt`, `sitemap.xml`, favicon 존재
- [ ] 404 링크 검사

## GitHub
```text
main
 ├─ index.html
 ├─ cases.html
 ├─ parking.html
 ├─ smartfarm.html
 ├─ tourism.html
 ├─ contact.html
 ├─ assets/
 └─ docs/
```

## Vercel
- Framework Preset: Other / Static
- Build Command: 없음
- Output Directory: 프로젝트 루트 기준 정적 파일

Vercel 설정이 자동으로 정적 파일을 인식하면 별도 `vercel.json`을 만들지 않는다. clean URL이나 redirect가 실제로 필요할 때만 추가한다.

## 배포 후 확인
- 6개 URL 직접 열기
- 모바일 실기기 확인
- HTTPS mixed content 없음
- OG 이미지 공개 URL 확인
- 이메일/전화 링크 확인
