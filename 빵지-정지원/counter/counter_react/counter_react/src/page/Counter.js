import React, {useState} from 'react'

const Counter=()=>{
    const [num,setState]=useState(0);
    const increase=()=>{
        setState(num + 1);
    }
    const decrease =() =>{
        setState(num -1);
    }

    return(
        <div>
            <h1>{num}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    )
}

export default Counter;