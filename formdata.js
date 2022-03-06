// FormData 객체 생성, FormData는 파일을 포함한 데이터를 전송할 수 있도록 해주는 객체
let formData = new FormData();
let fileField = document.querySelector('input[type="file"]'); // 사용자가 선택한 파일

formData.append('username', 'abc123'); // 텍스트 데이터
formData.append('attachment', fileField.files[0]); // 파일

fetch('url', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', JSON.stringify(response)));

// 2개 이상의 다중 파일 서버로 전송
// let fileField = document.querySelector('input[type="file"][multiple]');
// 선택한 파일 수 만큼 반복문을 사용해서 FormData에 삽입
