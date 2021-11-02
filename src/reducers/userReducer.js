import {createReducer} from '@reduxjs/toolkit'

const initialState=[{Note:"Default reminder",Month:new Date().getMonth(),EventDate:new Date().getDate()}];


export default createReducer(initialState,(builder)=>{
    builder.addCase("ADD_ITEM",(state,action)=>{
        state.push(action.payload);
    })
    builder.addCase("DELETE_ITEM",(state,action)=>{
        state.splice(action.payload,1);
    })
    builder.addCase("UPDATE_ITEM",(state,action)=>{
        console.log("Content inside the payload is ");
        console.log(action.payload);
        
        state[action.payload.index].Note=action.payload.newEvent;
        // state.splice(action.payload.index,1,action.payload.newEvent);

    })
})
