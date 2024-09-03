import { createSlice } from "@reduxjs/toolkit";

const UserDetail = createSlice({
    name :"User data",
    initialState:[],
    reducers :{
        userInfo: (state,action)=> {
            state.push(action.payload)
        }
    }
})

export default UserDetail.reducer;

export const {userInfo} =UserDetail.actions