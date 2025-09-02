/**
 * Set : 다양한 데이터 타입 저장
 * - add() : 데이터 추가
 * - has() : 데이터 확인
 * - delete() : 데이터 삭제
 */
let mySet = new Set();
mySet.add(100);
mySet.add('홍길동');
mySet.add({name : '홍길동'});
mySet.add([1,2,3,4,5]);
mySet.add(100);

console.log(mySet);

// mySet 데이터 출력
console.clear();
for(const value of mySet){
    console.log(value);
}

// mySet 데이터 확인
console.log(mySet.has(100));
console.log(mySet.has('홍길순'));

// mySet 데이터 삭제
if(mySet.has(100)){
    mySet.delete(100);
    console.log('삭제완료!!');    
}
console.log(mySet);