# nuxt-project

## Git 설정
1. 관리자에게 github 초대 메일 승인받기
2. access 토큰 생성
3. 윈도우 검색에서 `자격 증명 관리자`를 검색
4. windows 자격 증명을 선택, 아래 일반 자격 증명 추가를 선택
5. 연동하려고 하는 git주소를 입력, git 사용자명 입력(이메일주소 아님), 생성한 토큰 값 입력
6. git를 설치합니다.
7. 터미널을 켜고 아래 내용을 설정해줍니다.
```bash
--초기 세팅--
$ git config --global user.name "John Doe"      
$ git config --global user.email johndoe@example.com
$ git clone 저장소_url          /* 프로젝트 내려받기 */
$ git switch -c 브랜치명        /* 작업 브랜치 생성 */ 

--작업 완료 후 진행--
$ git add .                     /* stage change에 추가 */
$ git commit -m "커밋메세지"     /* local 저장소에 추가 */
$ git push origin 생성한 브랜치명          /* github repository에 추가 */

--github사이트 접속 후 생성한 브랜치로 이동한 뒤 PR요청--
--PR요청 방법은 Pull requests -> New pull request -> compare: 생성한 브랜치명 -> Create pull request -> comment 작성 
--만약 병합 요청이 거절당한다면 다시 수정후 add -> commit-> push 진행--
--단, PR후 다시 push 할 경우 다시 PR 요청할 필요 없음

$ git switch main           /* main 최신화를 위해 브랜치 이동 */
$ git fetch origin main     /* main브랜치의 최신소스를 동기화(fetch) */ 
$ git rebase origin/main    /* 최신 소스부터 다시 시작 */
$ git switch -c 브랜치명     /* 작업 브랜치 생성 */ 
```
8. 필요한 모듈 설치를 위해서 아래 command를 설치합니다.
## Build Setup

```bash
# 디펜던시 설치
$ npm install

# localhost:3000으로 서버 시작
$ npm run dev
```

## 설치된 npm 모듈목록
- ESLint : avaScript, JSX의 정적 분석 도구로 오픈 소스 프로젝트입니다. 코드를 분석해 문법적인 오류나 안티 패턴을 찾아주고 일관된 코드 스타일로 작성하도록 도와줍니다
- prettier : 코드 포멧터(Code Formatter)란 개발자가 작성한 코드를 정해진 코딩 스타일을 따르도록 변환해주는 도구를 말합니다.
- vetur : .vue 파일의 코드 하이라이팅을 위해서 사용합니다.


## 디렉토리 구조 설명
### `assets`

Stylus or Sass files, images, or fonts와 같은 컴파일이 필요하지 않은 파일들(디자이너)

### `components`

Vue.js 컴포넌트(마크업 개발자)

### `layouts`

애플리케이션의 레이아웃(마크업 개발자)

### `pages`

애플리케이션의 뷰와 라우트를 포함하는 디렉토리(프론트 개발자)

### `plugins`

루트 뷰 애플리케이션이 생성되기 전에 실행하고 싶은 자바스크립트 플러그인을 포함하는 디렉토리(공통)

### `static`

정적파일을 포함하는 디렉토리(공통) 

Example: `/static/robots.txt` is mapped as `/robots.txt`, js 파일

### `store`

Vuex store 파일들을 포함하는 디렉토리(프론트 개발자)
