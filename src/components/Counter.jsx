import React,{useState}from 'react'

export default function Counter(props) {

    let defaultValue  = props.defaultValue ? Number(props.defaultValue) : 0
    const [count, setCount] = useState(defaultValue)
    
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
