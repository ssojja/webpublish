/**
 * 객체를 생성하는 함수 : 생성자 함수
 * 일반 함수를 정의하는 형식으로 사용해야 함
 * 
 * 객체의 메소드 정의
 * 
 */

const fruits = {
    // field
    name : 'apple',
    emoji : '🍎',

    // method
    getName : function() { return this.name; },
    getEmoji : function() { return this.emoji; },
    display : function(){ 
        console.log(this.name, this.emoji);
    }
}

console.log(fruits);
console.log(fruits.display);
fruits.display();
console.log(fruits.getName());
console.log(fruits.getEmoji());

// 생성자 함수
function Apple (name, emoji) {  // 첫 글자 대문자
    this.name = name;
    this.emoji = emoji;
    
    this.display = () => {
        console.log(this.name, this.emoji);
    }
}

// const apple = (name, emoji) => {
//     this.name = name;
//     this.emoji = emoji;
// }

let redApple = new Apple("사과", '🍎');
console.log(redApple);
redApple.display();
// console.log(redApple.emoji);

// 자바에서 객체 -> 필드, 메소드