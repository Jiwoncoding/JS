const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts"); // HTTP Method, URL 정의
xhr.setRequestHeader("content-type", "application.json");  // 헤더 값 중 content-type 정의
xhr.send(); // 요청 전송

xhr.onload = () => {
    if(xhr.status===200) {
        // 정상적으로 응답되면 status가 200
        const res = JSON.parse(xhr.response); // 응답 데이터를 JSON.parse 함수로 JSON 객체로 변경
        console.log(res); // 100개의 데이터를 받아옴
    } else {
        // 에러 발생
        console.error(xhr.status, xhr.statusText); // 응답 상태와 응답 메시지를 출력
    }
};

