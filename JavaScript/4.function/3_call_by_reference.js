/**
 * 함수는 Object이고, Heap에 저장된다.
 * 일반함수 function으로 선언되는 경우에는,
 * 호이스팅되어 제일 먼저 힙에 초기화 된다.
 */

function add(a, b) {
    console.log(`sum = ${a + b}`);
}

let sum = add;  // call by reference 주소값이 넘어감!

console.log(add);   // 주소값을 출력
console.log(sum);   // 주소값을 출력
add(1, 2);
sum(1, 2);