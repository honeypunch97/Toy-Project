# TodoList

-  localStorage를 이용한 TodoList입니다.
-  3개의 버전이 존재합니다.
-  vw로 작업했기 때문에 모바일 화면 혹은 작은 화면(800px이하)에 적합합니다.

## 결과

[GitHub Pages 바로가기](https://honeypunch97.github.io/TodoList/v3/)

<img src="./images/result.PNG"/>

## 기능

-  show
   -  localStorage에 저장된 값으로 화면에 출력해줍니다
   -  ({id: 1, text: "테스트", isChk: false})
-  add
   -  상단 form요소 submit에 따라 input:text 값으로 localStorage에 추가해줍니다
   -  id값은 add() 기능이 실행될때마다 id값이 1씩 증가됩니다. (localStorage에 저장했습니다.)
   -  이때 isChk는 기본값으로 false입니다.
-  del
   -  각 리스트 우측 delBtn 클릭시 해당하는 리스트를 삭제합니다
   -  localStorage에도 해당 리스트를 삭제한 값을 다시 setItem 해줍니다
-  chkEvent
   -  리스트 좌측 아이콘을 클릭시 동작합니다
   -  true/false에 따라 아이콘과 리스트 색상이 토글됩니다.
   -  해당 데이터 변경 또한 localStorage에서 해당하는 데이터값을 수정해줍니다
-  modify(v3)
   -  클릭시 해당 리스트의 본문을 수정 할 수 있습니다.
   -  버튼의 내용이 '완료'로 바뀝니다.
   -  본문 내용을 수정 후 '완료'버튼 클릭시 localStorage에 저장됩니다.
   -  해당 리스트가 체크되어 있으면(완료 상태) 수정 버튼이 생성되지 않습니다.

## 버전

-  v1
   -  app.js에 모든 내용을 통합해서 작성
-  v2
   -  클래스를 사용해 class Todo 생성
-  v3
   -  import/export 사용해 모듈화 진행
   -  module/getEle.js, module/todo.js 생성
   -  getEle.js는 get과 getAll 분리
   -  todo.js는 class Todo 분리
   -  modify 기능 추가
   -  화면 너비 800px이상 bg출력
