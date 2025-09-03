/**
 * 구구단 출력 : 2 ~ 9 단
 */

for (let i = 1; i < 10; i++) {
    let rows = '';
    for(let j = 2; j < 10; j++){
        rows += ` ${j} X ${i} = ${i*j}\t`;
    }
    // console.log(` ${i} X ${j} = ${i*j}` );
    // console.log(rows);    
}

/**
 * 
 **
 ***
 ****
 ***** 
 */
for(let i = 1; i < 6; i++){
    let output = '';
    for(let j = 1; j <= i; j++){
        output += '*';
    }
    console.log(output);
}

/**
 * 초록사과 찍기, 3행 줄만 빨간 사과 출력
 */
for(let i = 1; i < 6; i++){
    let output = '';
    for(let j = 1; j <= i; j++){
        if(i === 3){
            output += '🍎';
        } else {
            output += '🍏';
        }
    }
    console.log(output);
}