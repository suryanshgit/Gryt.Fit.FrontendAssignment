import React from 'react'
import './scss/EditEvent.css'

function EditEvent({setEditFlag,setNewContent,newContent,handleEdit}) {
    
    return (
        <div className="edit-event-container">
            <input type="text" onChange={(e)=>setNewContent(e.target.value)} value={newContent} />
            <button onClick={()=>handleEdit()}>Submit</button> 
        </div>
    )
}

export default EditEvent
