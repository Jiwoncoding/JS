const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts"); // HTTP method, URL 정의
xhr.setRequestHeader("content-type", "application/json;charset=UTF-8"); // 헤더 값 중 content-type 정의
xhr.send(JSON.stringify({title:"foo", body:"bar", userId:1})); // 요청 전송
xhr.onload = () => {
    if(xhr.status===201) {
        // 201 상태코드는 요청이 성공적으로 처리되었으며, 자원이 생성되었음을 나타내는 성공 상태 응답코드
        // 일반적으로 POST 요청에 대한 응답 결과로 사용
        const res = JSON.parse(xhr.response); // 응답 데이터를 JSON.parse 함수의 JSON 객체로 변환
        console.log(res); // 응답 데이터 출력
    } else {
        // 에러 발생
        console.error(xhr.status, xhr.statusText); // 응답 상태와 응답 메시지를 출력
    }
};

// 아이디가 1인 데이터 수정
// xhr.open("PUT", "https://jsonplaceholder.typicode.com/posts/1");
// 아이디가 1인 데이터 삭제
// xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
