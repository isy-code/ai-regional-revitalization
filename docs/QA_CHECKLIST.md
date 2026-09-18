# QA_CHECKLIST — 최종 검수

## A. 공통 시각 검수
- [ ] Header 높이가 페이지마다 동일
- [ ] HERO 높이/배경/정렬 동일
- [ ] Main 최대폭 동일
- [ ] Footer 높이/패딩 동일
- [ ] Footer 메뉴 없음
- [ ] active 메뉴만 파란색/underline
- [ ] 카드 border/radius/shadow 규칙 일관
- [ ] 시안의 정보 밀도와 계층 구조가 유지됨

## B. 콘텐츠
- [ ] content 문서의 모든 섹션이 존재
- [ ] 제목/문장/숫자 누락 없음
- [ ] 단계 순서 변경 없음
- [ ] AI관광 DAY 1~30 전부 존재
- [ ] 문의처 정보가 문서와 일치
- [ ] 시안에 없는 마케팅 문구 추가 없음

## C. 이미지
- [ ] 이미지 왜곡 없음
- [ ] `object-fit` 적절
- [ ] 이미지 안에 파일명/번호/설명 텍스트 없음
- [ ] 콜라주 원본이 최종 UI에 남아 있지 않음
- [ ] 최종 WebP 적용
- [ ] 공식 로고 실제 파일 사용
- [ ] 404 이미지 없음

## D. Responsive
### 375px
- [ ] horizontal overflow 없음
- [ ] 메뉴 햄버거 정상
- [ ] 카드 1열
- [ ] Hero 텍스트 잘림 없음
- [ ] 표/프로세스 읽을 수 있음

### 768px
- [ ] 2열/1열 전환 자연스러움
- [ ] 이미지 비율 정상

### 1024px
- [ ] nav overflow 없음
- [ ] 카드 폭 과도하게 좁지 않음

### 1440px
- [ ] container 중앙 정렬
- [ ] 시안과 유사한 여백

## E. 접근성
- [ ] 페이지당 h1 1개
- [ ] heading 순서 논리적
- [ ] 모든 의미 이미지 alt
- [ ] 장식 이미지 alt=""
- [ ] nav aria-label
- [ ] mobile menu aria-expanded
- [ ] keyboard focus visible
- [ ] 링크와 버튼 키보드 접근 가능
- [ ] 색상만으로 상태 표현하지 않음

## F. 기술
- [ ] HTML validation에서 치명적 오류 없음
- [ ] 콘솔 오류 없음
- [ ] CSS 파일 중복/충돌 최소
- [ ] JS 오류 없음
- [ ] 모든 내부 링크 정상
- [ ] 모든 페이지 active nav 정확
- [ ] favicon 정상
- [ ] robots/sitemap 존재
- [ ] title/description 페이지별 고유

## G. 성능
- [ ] HERO/LCP 이미지 lazy 제외
- [ ] 본문 이미지 lazy loading
- [ ] width/height 또는 aspect-ratio 명시
- [ ] 불필요한 대형 PNG 없음
- [ ] 외부 JS framework 없음

## H. 최종 사용자 확인 필요
- [ ] 나가오카대학 공식 로고 승인
- [ ] Vision Inside 공식 로고 승인
- [ ] 문의처 정보 최종 확인
- [ ] OG 이미지 확인
