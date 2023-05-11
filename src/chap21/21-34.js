// 완전한 URI
const uri = 'http://example.com?name=이웅모&job=programmer&teacher';

// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩
const enc = encodeURI(uri);
console.log(enc); // http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A&%job=programmer&teacher

// decodeURI 함수는 인코딩된 완전한 URI를 전달받아 이스케이프 처리 이전으로 디코딩
const dec = decodeURI(enc);
console.log(dec); // http://example.com?name=이웅모&job=programmer&teacher