# IMAGE_MAP – 페이지별 이미지 매핑

## 1. 사용 원칙
- 아래의 **최종 파일명**을 HTML에서 사용한다.
- 현재 PNG 원본은 최종 배포 전 WebP로 변환한다.
- AI주차장·AI스마트팜·AI관광의 콜라주는 제작 원본이며 최종 UI에서는 개별 이미지로 분리한다.
- 이미지 안에 번호·파일명·설명 문구를 넣지 않는다.

---

## 2. 공통

| 현재 원본 | 최종 파일명 | 용도 |
|---|---|---|
| `스마트시티와_네트워크_아치.png` | `assets/images/common/common-hero-city.webp` | 6개 페이지 공통 HERO |
| `연결의_도시_후지산과_서울_타워.png` | `assets/images/common/common-korea-japan-network.webp` | 한일 협력/연결 비주얼 |
| `눈_덮인_산과_강변_도시_전경.png` | `assets/images/common/common-nagaoka-landscape.webp` | 하단 지역 배너/비전 |

추가 준비: `assets/images/common/og-image.webp` 1200×630

---

## 3. 기업개요

| 현재 원본 | 최종 파일명 | 사용 위치 |
|---|---|---|
| `company-manufacturing.png` | `company-manufacturing.webp` | AI 제조 |
| `company-smartfarm.png` | `company-smartfarm.webp` | AI 농식품 |
| `company-tourism.png` | `company-tourism.webp` | AI 관광 |
| `company-bio-container.png` | `company-bio-container.webp` | AI 바이오 |
| `company-office-ai.png` | `company-office-ai.webp` | AI 업무혁신 |
| `company-ai-education.png` | `company-ai-education.webp` | AI 교육 |
| `company-nagaoka.png` | `company-nagaoka.webp` | 지역/하단 배너 |

경로: `assets/images/company/`

---

## 4. AI구축사례

| 현재 원본 | 최종 파일명 |
|---|---|
| `case-manufacturing.png` | `case-manufacturing.webp` |
| `case-smartfarm.png` | `case-smartfarm.webp` |
| `case-bio-container.png` | `case-bio-container.webp` |
| `case-tourism.png` | `case-tourism.webp` |
| `case-smart-parking.png` | `case-smart-parking.webp` |
| `case-ai-office.png` | `case-ai-office.webp` |

경로: `assets/images/cases/`

---

## 5. AI주차장
현재 원본: `ai-parking-images-clean.png`

### 최종 분리 목표
| 최종 파일명 | 용도 | 권장 비율 |
|---|---|---|
| `parking-before.webp` | 빈집/유휴부지 Before | 4:3 |
| `parking-after.webp` | 스마트주차장 After | 4:3 |
| `parking-layout.webp` | AI 주차장 전체 구성/조감 | 16:9 |
| `parking-lpr-camera.webp` | 번호판 인식 카메라 | 4:3 |
| `parking-payment.webp` | 무인 결제/키오스크 | 4:3 |
| `parking-dashboard.webp` | 관제 대시보드 | 16:9 |
| `parking-mobile-app.webp` | 모바일 주차 앱 | 4:3 |
| `parking-installation.webp` | 현장 설치 예시 | 16:9 |

경로: `assets/images/parking/`

---

## 6. AI스마트팜
현재 원본: `ai-smartfarm-images-clean.png`

### 최종 분리 목표
| 최종 파일명 | 용도 |
|---|---|
| `smartfarm-greenhouse.webp` | 스마트 온실 |
| `smartfarm-field-iot.webp` | 노지/IoT 재배 |
| `smartfarm-robot-harvest.webp` | 로봇 수확 |
| `smartfarm-data-analysis.webp` | 태블릿/AI 분석 |
| `smartfarm-ai-control.webp` | 환경 자동제어 |
| `smartfarm-food-factory.webp` | Micro Food Factory |
| `smartfarm-products.webp` | Wellness 제품 |
| `smartfarm-experience.webp` | 관광/체험/교육 |

경로: `assets/images/smartfarm/`

---

## 7. AI관광
현재 원본: `ai-tourism-images-clean.png`

### 최종 분리 목표
| 최종 파일명 | 용도 |
|---|---|
| `tourism-snow-sake-hero.webp` | 관광 핵심 비주얼 |
| `tourism-ski.webp` | 스키 |
| `tourism-onsen.webp` | 온천 |
| `tourism-sake.webp` | 사케 |
| `tourism-food.webp` | 미식 |
| `tourism-culture.webp` | 문화/지역교류 |
| `tourism-accommodation.webp` | 숙소/장기체류 |
| `tourism-ai-concierge.webp` | AI Concierge |

경로: `assets/images/tourism/`

---

## 8. 문의하기

| 현재 원본 | 최종 파일명 | 사용 위치 |
|---|---|---|
| `contact-nagaoka-university.png` | `contact-nagaoka-university.webp` | 일본측 문의처 |
| `contact-vision-inside-building.png` | `contact-vision-inside-building.webp` | 한국측 문의처 |
| `contact-city-skyline.png` | `contact-city-skyline.webp` | 하단 배너 |
| `contact-korea-japan-network.png` | `contact-korea-japan-network.webp` | 한일 협력 메시지 |

공식 로고 별도(실제 전달본은 PNG):
- `assets/logos/nagaoka-university-logo.png`
- `assets/logos/vision-inside-logo.png`

---

## 9. 아이콘
별도 AI 이미지 제작 대신 Lucide 등의 SVG를 프로젝트 내부에 저장해 사용한다.

필요 아이콘 예시:
`phone`, `fax`, `mail`, `map-pin`, `factory`, `sprout`, `car`, `camera`, `credit-card`, `chart`, `users`, `graduation-cap`, `globe`, `briefcase`, `database`, `cloud`, `bot`, `handshake`.
