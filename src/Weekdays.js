import React from 'react'
import './scss/Weekdays.css'

function Weekdays() {
    let a=["SUN","MON","TUE","WED","THURS","FRI","SAT"];
    return (
        <div className="weekdays-container"> 
            {
                a.map((item)=><div>{item}</div>)
            }
        </div>
    )
}

export default Weekdays
