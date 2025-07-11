# Instacart_RFML_Project 🛒📊

이 프로젝트는 Kaggle의 Instacart 고객 주문 데이터를 기반으로  
RFM(Loyalty) 분석과 군집화를 통해 **고객 세그멘트 전략을 수립하고, 마케팅 인사이트를 도출**한 분석 사례입니다.

> ⚠️ 대용량 파일 안내  
GitHub 업로드 용량 제한(100MB)을 초과한 아래 파일은 포함되지 않았습니다:
- Power BI 결과 파일 (.pbix)
- 통합 데이터셋 (.csv, .parquet)
- 최종 발표용 PPT

필요 시 별도 공유 가능합니다.

---

## 📌 프로젝트 개요

- **목표**: Instacart 사용자 구매 패턴 기반 세그멘트 도출 및 타겟 마케팅 전략 제안
- **데이터**: Kaggle 공개 Instacart 데이터셋 사용
- **분석 방법**: RFM 분석, KMeans 군집화, A/B 테스트 설계

---

## 🙋‍♀️ 주요 기여 (본인 역할)

- 🧹 **데이터 통합 및 전처리**: 다중 테이블 정제 및 고객-제품 연계 구조 구성
- 📊 **RFM & Loyalty 분석**: 재구매율 기반 고객 충성도 정량화
- 📈 **제품 판매 편중 시각화**: 80:20 법칙 이상의 편향 구조 분석 및 문제정의
- 🧪 **군집별 A/B 테스트 시나리오 설계** 및 KPI 기반 모니터링 전략 기획
- 🧠 **군집별 유의미한 인사이트 도출**: 구매 패턴 특성 기반 마케팅 전략 제안
- 📉 **Power BI 기반 대시보드 구현**: 실시간 지표 모니터링 및 군집별 KPI 시각화

---

## 📊 주요 기술 스택

- Python (Pandas, Scikit-learn, Seaborn, Matplotlib)
- Power BI
- Jupyter Notebook
- Git & GitHub

---
## 🗂️ 폴더 구조

Instacart_RFML_Project/
├── UI/
│ ├── instacart-adminpage/ # 관리자용 대시보드 UI
│ └── instacart-with-recommendation/ # 추천 시스템 기반 UI 프로토타입
│
├── 데이터/
│ └── k5(5개 등급으로 분류)/ # 군집 분석 및 전처리 결과
│
├── WBS 및 주간일지/ # 주간 보고서 및 일정 관리
├── 시연영상/ # 군집별 시나리오/UX 시연 영상
├── 최종PPT/ # 발표자료 (용량 문제로 업로드 제외)
├── .gitignore
└── README.md






---

## 💻 기술 스택

- **언어/분석**: Python (Pandas, Scikit-learn, Matplotlib, Seaborn)
- **시각화**: Power BI
- **UI/UX**: Figma, Streamlit 기반 UI 시뮬레이션
- **버전 관리**: Git & GitHub

---
