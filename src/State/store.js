import { configureStore } from "@reduxjs/toolkit";
import UserDetail from "./userdata"
import pendingrequest from "./pendingrequest";
import friendlist from "./friendlist";
const store = configureStore({
    reducer:{
     UserDetail :UserDetail,
    pendingrequest :pendingrequest,
    friendlist:friendlist,
    }
})

export default store