import { useState } from 'react';
import { Counter } from './components/Counter.jsx';
import './App.css';

/* 자식 > 부모(누적합) > 자식(결과 전송) */

export default function App() {
    const [total, setTotal] = useState(0);

    const click = (type) => { // 자식 컴포넌트의 클릭이벤트 결과 가져오기
        if(type === "+") setTotal(total + 1);
        else if(type === "-") setTotal(total - 1);
        else if(type === 0) setTotal(0);
    }

    return (
        <>
            <h1>Counter Test</h1>
            <Counter click={click} total={total} init={0}/>
            <Counter click={click} total={total} init={0}/>
        </>
    );
}