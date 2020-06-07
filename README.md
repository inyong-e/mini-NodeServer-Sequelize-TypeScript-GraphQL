# mini-NodeServer-Sequelize-TypeScript-GraphQL

기본 GraphQL로 세팅된 Express 서버 입니다.

### 서버 환경

- Sequelize
- Typescript
- GraphQL

## 코드 구성

- 시퀄라이즈를 이용한 Postgresql DB 연동
- GraphQL 기본 세팅 (컨트롤러, 모델, 리졸버)

## 실행 방법

`npm install` : 프로젝트에 필요로 한 라이브러리 설치
`npm start` : Express 서버 실행

## 기타 사항

`.env` 파일을 생성하여 DB 정보(DB_NAME, DB_USER, DB_PASSWORD)를 입력하여 사용, 또는 `/server.ts` 내 DB 연동 부분에서 DB 정보를 입력하여 사용 가능.
