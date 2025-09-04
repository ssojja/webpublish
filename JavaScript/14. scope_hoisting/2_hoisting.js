/**
 * 호이스팅(Hoisting) : 파일이 호출되면 실행 전 코드전체를 읽어 메모리에 로드하는 작업
 * - function 키워드로 정의된 함수
 */
test1();    // 함수 호출
console.log(test1); // stack frame 저장되는 변수명(객체주소저장)

function test1() {  // 호이스팅 작업이 선행됨!
    console.log('-----> test1');
}

/**
 * ECMAScript 기준으로 let, const로 정의된 함수는
 * 호이스팅 작업이 선행되지 않음!!!
 */

// 변수형 함수
// test2();    // 에러 발생
let test2 = () => {
    console.log('-----> test2');
}

test2();    // 정상 호출

// test3();     // 에러 발생
let test3 = function() {
    console.log('-----> test2');
}