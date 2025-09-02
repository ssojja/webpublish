/**
 * Rest parameter(나머지 인자) : 파라미터 인자를 배열로 생성
 * - 함수의 매개변수에 정의함, 매개변수 중 마지막에 정의
 */
function add(a, b, ...numbers){
    console.log(a, b, numbers);   
}

add(1,2,5,4,5,65,58);
add(100, 200, 300, 400, 500);
add('🍎','🍊','🍋','🍏','🍑');