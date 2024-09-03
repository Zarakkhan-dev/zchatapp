import { createSlice } from "@reduxjs/toolkit";


const pendingrequest = createSlice({
    name:"All pending request",
    initialState:[],
    reducers : {
        allpendingrequest :(state,action) =>{
            state = [];
            state.push(action.payload);
            return state
        }
    }
})

export default  pendingrequest.reducer;

export const {allpendingrequest} = pendingrequest.actions;