import React from 'react'

function Month({month}) {
    let monthName=new Map();
    monthName.set(0,"January");
    monthName.set(1,"February");
    monthName.set(2,"March");
    monthName.set(3,"April");
    monthName.set(4,"May");
    monthName.set(5,"June");
    monthName.set(6,"July");
    monthName.set(7,"August");
    monthName.set(8,"September");
    monthName.set(9,"October");
    monthName.set(10,"November");
    monthName.set(11,"December");
    
    return (
        <div>
            {monthName.get(month)}
        </div>
    )
}

export default Month
