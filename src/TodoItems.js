import React,{useState,useEffect} from 'react'
import './scss/TodoItems.css'
import {useSelector} from 'react-redux'
import Events from './Events'


function TodoItems({month,slideIndex}) {
   
    const mystate=useSelector(state=>state)
    console.log(mystate)

    const [taskList,setTaskList]=useState([]);
   
    
    useEffect(()=>{
        console.log("value after fileter")
       console.log( mystate.filter((item)=>item.Month==month));
       setTaskList( mystate.filter((item)=>(item.Month==month && 
         (item.EventDate<=slideIndex.end && item.EventDate>=slideIndex.start))));
    },[mystate,month,slideIndex])
    
    console.log(taskList);
    
 
    return (
            <div className="container-events">
            <h1 className="heading">TODO</h1>
                { 
                    
                    taskList.map((item)=>{
                        return(
                            <Events item={item}/>
                       
                        )
                    })
                }
            </div>
        
    )
}

export default TodoItems
