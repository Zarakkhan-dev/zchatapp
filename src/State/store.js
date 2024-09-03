import { configureStore } from "@reduxjs/toolkit";
import UserDetail from "./userdata"
import pendingrequest from "./pendingrequest";
const store = configureStore({
    reducer:{
    UserDetail:UserDetail,
    pendingrequest:pendingrequest
    }
})

export default store