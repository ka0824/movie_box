# 프로젝트 제목
## 목차



### [1. 프로젝트 소개 및 목적](#1-프로젝트-소개-및-목적)

### [2. 설치 방법](#2-설치-방법)  

### [3. 사용 방법](#3-사용-방법)

### [4. 사용 기술](#4-사용-기술)
### [5. 주요 기능](#5-주요-기능)  
### [6. 폴더 구조](#6-폴더-구조)

---

## 0. 링크 접속하기

### [프로젝트 페이지 이동](https://movie-box-psi.vercel.app/boxoffice)

---

## 1. 프로젝트 소개 및 목적
- 프로젝트 제목 : movieBox
- 프로젝트 목적 : 국내 박스오피스 순위에 대한 정보 및 간략한 영화 소개를 제공하는 서비스 입니다.

![제목 없음 0](https://github.com/ka0824/movie_box/assets/79782594/04575643-bcad-4371-a42b-f6a4a05d1905)

<br />

![제목 없음](https://github.com/ka0824/movie_box/assets/79782594/dc72c7c1-b719-435e-9e72-a0bf2dfdade2)

<br />

![제목 없음1](https://github.com/ka0824/movie_box/assets/79782594/68e4ecf5-3737-47ef-bfb3-e6e25faa512f)

<br />

---

## 2. 설치 방법

```
npm i
```

---

## 3. 사용 방법

```
npm run dev
```

---

## 4. 사용 기술
- nextjs
- agGrid (차트 라이브러리)

---

## 5. 주요 기능
- kobis(영화 진흥 위원회) 외부 api 활용
- 박스 오피스 정보 차트로 시각화
- 영화 세부 정보 제공
- 반응형 디자인 및 터치 이벤트 구현

---

## 6. 폴더 구조
```
📦src
 ┣ 📂component
 ┃ ┗ 📜loading-spinner.tsx
 ┣ 📂customhook
 ┃ ┣ 📜use-daily-boxoffice.ts
 ┃ ┣ 📜use-date.ts
 ┃ ┣ 📜use-movie-data.ts
 ┃ ┗ 📜use-weekend-boxoffice.ts
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜hello.ts
 ┃ ┣ 📂boxoffice
 ┃ ┃ ┣ 📜bargraph.tsx
 ┃ ┃ ┣ 📜daily.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┣ 📜piegraph.tsx
 ┃ ┃ ┣ 📜rank.tsx
 ┃ ┃ ┣ 📜toggle.tsx
 ┃ ┃ ┗ 📜weekend.tsx
 ┃ ┣ 📂movie
 ┃ ┃ ┗ 📜[slug].tsx
 ┃ ┣ 📂search
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📜footer.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜nav.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┗ 📜_document.tsx
 ┣ 📂styles
 ┃ ┗ 📜globals.css
 ┗ 📂type
 ┃ ┗ 📜global.d.ts
```
