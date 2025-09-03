/**
 *  비교 연산자 : >, <, >=, <=, ==(값), ===(값 + 데이터)
 */
console.log(3 > 2);     // true
console.log(3 < 2);     // false
console.log(3 >= 2);    // true
console.log(3 <= 2);    // false

console.log(3 == '3');  // true : 3 == 3(engine이 type 자동 변경)
console.log(3 === '3'); // false
console.log('ascii');
console.log(3 == 'A');  // false : 3 == 67(A의 아스키문자 값)
console.log(3 === 'a'); // false

let obj1 = {
    name : "홍길동"
};

let obj2 = {
    name : "홍길동"
};
console.log('참조형 ------');
console.log(obj1 == obj2);
console.log(obj1.name == obj2.name);
console.log(typeof obj1 == typeof obj2);