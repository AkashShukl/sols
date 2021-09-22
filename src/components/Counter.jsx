import React from 'react'

export default function Counter(props) {

    return (
        <div>
            <button onClick= {()=>props.incr() }> {" + "} </button> 
            {" "}  {props.count} {" "}
            <button onClick= {()=>props.decr() }> {" - "} </button> 
        </div>
    )
}
