## 디렉터리 구조

-   3계층 구조 : MVC 패턴 적용하기 용이함.
    -   컨트롤러 : 뷰에서 넘어온 요청을 받아서 권한 체크, 유효성 검증 한 후 서비스 계층으로 넘김
    -   서비스 : 비즈니스 로직 처리
    -   데이터 엑세스
-   라우터 : 익스프레스에서 컨트롤러 역할 ( app.js )
