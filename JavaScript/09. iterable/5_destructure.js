/**
 * destructure : 구조 분해 할당
 * - 객체의 구조를 분해하여 대입하는 변수에 자동으로 매핑
 */
// 1. 배열 객체
let numbers = [1, 2, 3, 4, 5];
let aa = numbers;
let bb = numbers[2];
let [a, b, ...nlist] = numbers;     // 구조분해 할당

console.log(`aa = ${aa}`);
console.log(`bb = ${bb}`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`nlist =`, nlist);

// 2. 오브젝트 리터럴
console.clear();
let hong = {
    name : '홍길동',
    age : 20,
    job : '개발자'
}

// let name = hong.name;
// let age = hong.age;
// let job = hong.job;
// let {name2, age, job} = hong;    // 이름 동일하지 않으면 할당 안됨
// console.log(`name2 = ${name2}`);
let {name, age, job} = hong;    // 구조분해 할당
console.log(`name = ${name}`);
console.log(`age = ${age}`);
console.log(`job = ${job}`);

// 오브젝트 리터럴을 반환하는 함수
function createObject() {
    return {
        aname : 'apple',
        emoji : '🍎',
        color : 'red'
    };
}

let {price = 100, color, aname, emoji} = createObject();
console.log(aname, emoji, color, price);