import React from 'react'
import './scss/Date.css'


function DateComponent({item,index}) {
    return (
        <div className="date-container" id={index}>
            {item}
        </div>
    )
}

export default DateComponent
