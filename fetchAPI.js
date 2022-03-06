fetch('http:// jsonplaceholder.typicode.com/posts')
// 서버 요청에 대한 응답이 왔을 때 실행되는 then()
// 이때 응답받은 데이터는 문자열 형식이기 때문에 response.json() 함수를 호출
.then((response)=> response.json())
// json 데이터로 변경이 완료되면 두 번째 then()함수의 매개변수로 변경된 json 데이터를 전달
.then((json)=> console.log(json));

// 데이터 생성 POST
fetch('http:// jsonplaceholder.typicode.com/posts', {
    method: 'POST', // HTTP 요청 방법
    body: JSON.stringify({  // 전송할 데이터
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: { // 헤더 값 정의
        'content-type': 'application/json: charset=UTF-8', // content-type 정의
    },
}).then((response)=> response.json())
  .then((json)=> console.log(json));

// 데이터 수정 PUT
fetch('http:// jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: { // 헤더 값 정의
        'content-type': 'application/json: charset=UTF-8', // content-type 정의
    },
}).then((response)=> response.json())
.then((json)=> console.log(json));

// 데이터 삭제 DELETE
// fetch('http:// jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });