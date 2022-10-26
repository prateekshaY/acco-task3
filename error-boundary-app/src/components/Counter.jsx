import React,{useState} from 'react'

function Counter() {
    const [count, setCount]= useState(0);

    if(count===5){
      throw new Error("App Crashed");
    }
  
    const incrementCount=()=>{
        setCount(prev=>prev+1);
    }
  return (
    <div>
        <>
        <h2>Count :{count}</h2>
        <br/>
        <button onClick={incrementCount}>Increment</button>
        </>
        <div>Throws Error when count reaches 5</div>
        </div>
  )
}

export default Counter;