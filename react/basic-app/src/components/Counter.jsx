import { useState } from "react";

export function Counter({click, total, init}) {
    console.log(init, typeof init);

    const [number, setNumber] = useState(init);
    const handleClickIncrement = () => {
        if(number < 10) {
           setNumber(number+1);
           click("+");
        } else{ setNumber(number); }
    }
    
    const handleClickDecrement = () => {
        if(number > 0) {
            setNumber(number-1);
            click("-");
        } else{ setNumber(0); }
    }
    
    const handleClickInit = () => {
        setNumber(0);
        click(0);
    }

    return (
        <div className="counter-container">
            <div>
                <span className="number">{number}</span>
                <span>/</span>
                <span className="total-number">{total}</span>
            </div>
            <div>
                <button type="button" onClick={handleClickDecrement}>감소(-)</button>
                <button type="button" onClick={handleClickIncrement}>증가(+)</button>
                <button type="button" onClick={handleClickInit}>초기화</button>
            </div>
        </div>
    );
}
