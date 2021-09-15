import React from 'react'

export default function Greetings(props) {

    const greet = () => {
        let date =  new Date()
        let hour = date.getHours()

        if( hour > 4 && hour < 12 )
            return " Good morning "
        else if ( hour >=12 && hour < 16)
            return "Good afternoon"
        else
            return "Good night"

    }

    return (
        <div>
            <h1> Hello {props.name} {greet()}</h1>
        </div>
    )
}
