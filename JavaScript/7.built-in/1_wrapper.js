/**
 * 기본형(원시) 데이터 타입 - number, string, boolean, null, undefined
 * 기본 데이터 타입에 클래스 형식으로 정의한 데이터 타입을 wrapper 클래스라고 함
 */

// Number 클래스 형식
let a = "123";
if(typeof a === "string"){ parseInt(a);}
console.log(typeof a, a);

if(a == 123){ console.log(typeof a, a); }

// String : 문자열 클래스
let str1 = new String("Hello");
let str2 = new String("Hello");

console.log(str1, str1.length, str1.valueOf());
console.log(str2, str2.length, str2.valueOf());
console.log(str1 == str2);
console.log(str1.valueOf() == str2.valueOf());

// Boolean : 불리언 클래스