import React from "react";
import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const onIncrease = () => {
        console.log("increase가 클릭됨");
        setCount(prevCount => prevCount + 1); // prevCount는 콜백 함수의 인자로서 이전 상태값
    }

    const onDecrease = () => {
        console.log("decrease가 클릭됨");
        setCount(prevCount => prevCount - 1);
    }

    return (
        <>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>

        </>
    )
    // React에서는 JSX 내에서 이벤트 처리를 직접 수행하는 것이 일반적인 패턴
    // 이벤트 핸들러 함수를 컴포넌트 내부에 정의하고, JSX 요소의 이벤트 속성에 해당 함수를 연결하여 사용
}
export default Counter;
