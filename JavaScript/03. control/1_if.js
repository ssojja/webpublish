/**
 *  if, if ~ else, if ~ else if ... ~ else
 *  삼항연산자 : (조건문) ? true인 경우 실행문 : false인 경우 실행문;
 */

// 입력되는 과일명이 apple인 경우에만 이모지 출력
// apple 이외의 과일은 이름 출력
let fruit = 'apple';
if(fruit === 'apple'){
    console.log('🍎');
} else{
    console.log(fruit);
}

// 위의 if문을 삼항연산자로 변환
let result = undefined;
(fruit == 'apple') ? result = '🍎' : result = fruit;
console.log(`result -> ${result}`);

// 선택한 메뉴를 출력
let menus = ['pizza', 'hotdog', 'coffee'];
let selectMenu = 'coffee'
if(menus[0] === selectMenu){
    console.log('🍕');    
} else if(menus[1] === selectMenu){
    console.log('🌭');
} else if(menus[2] === selectMenu){
    console.log('☕');
} else{
    console.log('메뉴 준비중입니다리');
}

// 입력 받은 숫자가 홀수이면 사과 이모지, 짝수이면 포도 이모지를 출력
let inNumber = 101;
let fresult = undefined;
if((inNumber % 2)){
    fresult = '🍎'
} else {
    fresult = '🍇'
}
console.log(`결과1 -> ${fresult}`);

// 삼항 연산식 : 1 --> true, 0 --> false
(inNumber % 2) ? fresult = '🍎' : fresult = '🍇';
console.log(inNumber % 2, `결과2 -> ${fresult}`);