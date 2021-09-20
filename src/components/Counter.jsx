import React,{useState}from 'react'

export default function Counter(props) {

    const [count, setCount] = useState(props.defaultValue)

    React.useEffect(() => {
       setCount(props.defaultValue)
    }, [props.defaultValue])
    
    return (
        <div>
            <button onClick= {()=>setCount(prevCount => prevCount+1)}> {" + "} </button> 
            {" "}  {count} {" "}
            <button onClick= {()=>setCount(prevCount => prevCount-1)}> {" - "} </button> 
        </div>
    )
}
