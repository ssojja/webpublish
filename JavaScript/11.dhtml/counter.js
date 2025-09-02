// 숫자 증가/감소 함수
function counter(type){
     let number = document.querySelector("#number").textContent

    if(type === 'increment'){
        if(number >= 0) {
            document.querySelector("#number").textContent = ++number;
        }
    } else{
        if(number > 0) {
            document.querySelector("#number").textContent = --number;
        }
    }
}

// // 숫자 증가 함수
// function increment () {
//     // alert('증가!');
//     let number = document.querySelector("#number").textContent;   // form -> input

//     // 0보다 크면 1증가
//     if(number >= 0) {
//         document.querySelector("#number").textContent = ++number;
//     }
// }

// // 숫자 감소 함수
// function decrement () {
//     // alert('감소!');
//     let number = document.querySelector("#number").textContent;   // form -> input

//     // 0보다 크면 1감소
//     if(number > 0) {
//         document.querySelector("#number").textContent = --number;
//     }
// }