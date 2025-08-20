/**
 * 싱글 구구단 - 단 하나를 매개변수로 입력 받아 출력
 */
export function singleGugudan(dan){
    for(let i = 1; i <= 9; i++){
        console.log(`${dan} X ${i} = ${dan * i}`);
    }
}

export function multiGugudan(start, end) {
    for(let i = 1; i <= 9; i++){
        let rows = '';
        for(let j = start; j <= end; j++){
            rows += `${j} X ${i} = ${j * i}\t`;
        }
        console.log(rows);
    }
}