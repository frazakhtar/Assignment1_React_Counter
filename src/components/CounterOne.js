import React,{useEffect, useState} from 'react'

const CounterOne = () => {
    const [count, setCount] = useState(0)
    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecrement=()=>{
       if(count>=1) setCount(count-1);
    }
  return (
    <>
    <h2 className='subheading1'>Functional Based Component - Counter</h2>
    <button disabled = {count===0} className='DecrementButton' onClick={()=>handleDecrement()}>Decrement</button>
    <span className='count'>{count}</span>
    <button className='IncrementButton' onClick={()=>handleIncrement()}>Increment</button>
    </>
  )
}

export default CounterOne