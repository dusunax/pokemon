# 포켓몬 🥚🐣

- 포켓몬 api를 사용하여, 랜덤 포켓몬 스티커를 뽑는 페이지입니다.
- 각 회원이 뽑은 포켓몬 리스트를 저장하고 불러옵니다.

### 사용 기술 및 패키지

```
react, nextJS, react-query, tailwind, firebase
```

---

## 서비스

### 1. 새 포켓몬

- 각 api 통신을 통해 1) 포켓몬 데이터 2) 이미지 데이터를 받아옴
- 새 포켓몬을 사용할 형태로 만들어서 리턴

### 2. 리스트 save & fetch

- 파이어베이스 db에 새 포켓몬을 저장하고, 전체 리스트를 가져옵니다.
- 리액트 쿼리 사용할 방도
  - 다음 포켓몬을 프리패칭해서 가지고 있다가, 스티커를 뒤집으면서 보여주는 거 어떤가요?
  - 리스트 페이지네이션

### 3. 포켓몬 상세

- 페이지의 [id]에 맞는 각 포켓몬 보여주기
  - 작업 완료 후에 추가할 수 있는 내용 생각해보기!

### 4. 타이머

- 마지막 시간으로부터 얼마나 지났는지, 현재 시간을 기준으로 구합니다.
  - 남은 시간 리턴
- 가용 시간이 되었는지 확인합니다.
  - 가용 여부를 리턴

---

## 일자별 작업내용

- [데이터 패칭 및 unactive 쿼리 키 코드 개선 _ 230210](https://github.com/dusunax/toy/issues/9)
- [포켓몬 리스트 추가, 관련 hook & query key 작업 _ 230212](https://github.com/dusunax/toy/issues/11)
- [Firestore : 유저별 리스트 _ 230213](https://github.com/dusunax/toy/issues/13)
- [Firestore & React-query : 리스트 페이지네이션 추가 _ 230215](https://github.com/dusunax/toy/issues/15)
- [Firebase : timestamp를 사용한 타이머 추가 _ 230215](https://github.com/dusunax/toy/issues/17)
- [NextJS SeverSideProps 추가, pokemon/[id].tsx에 포켓몬 상세 링크 _ 230216](https://github.com/dusunax/toy/issues/20)
- [타이머 개선, Vercel 배포 _ 230221](https://github.com/dusunax/toy/issues/23)
- [Tailwind CSS 작업 진행 _ 230322](https://github.com/dusunax/toy/issues/24)
- [Tailwind CSS 작업 & 타이머 개선 _ 220223](https://github.com/dusunax/toy/issues/27)
- [Tailwind CSS 작업 약간 _ 230224](https://github.com/dusunax/toy/issues/29)
- [로딩 시 스켈레톤 UI 추가 및 tailwind CSS 일부 수정 _ 230313](https://github.com/dusunax/toy/issues/31)
- [외부 도메인 이미지 img 태그 사용, 일부 CSS 변경, 추가 버그 수정 필요 _ 230315](https://github.com/dusunax/toy/issues/34)
