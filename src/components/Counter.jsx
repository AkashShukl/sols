import React,{useState}from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)
    
    const incr = () => {
        setCount(count+1)
    }

    const decr = () => {
        setCount(count-1)
    }
    
    return (
        <div>
            <button onClick= {incr }> {" + "} </button> 
            {" "}  {count} {" "}
            <button onClick= {decr }> {" - "} </button> 
        </div>
    )
}
