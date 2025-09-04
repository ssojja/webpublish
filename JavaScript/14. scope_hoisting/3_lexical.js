/**
 * 
 */
{
    const a = 1;    // 전역변수
    const b= 100;
    console.log(a);

    {
        const a = 2;    // 지역변수
        console.log(a);

        {
            const c = 1000;
            const a = 3;
            console.log(a);
            console.log(b);
        }
        console.log(c);       
    }
}

// function test1() {
//     const a = 1;
//     console.log(a);        

//     function test2() {
//         const b = 2;
//         console.log(a);        
//     }
// }