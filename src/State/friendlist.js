import { createSlice } from "@reduxjs/toolkit";

const friendlist = createSlice({
  name: "friendlist",
  initialState: [],
  reducers: {
    addFriend: (state, action) => {
      const friendExists = state.find(friend => friend.FriendName === action.payload.FriendName);
        console.log(friendExists)
      if (!friendExists) {
        state.push(action.payload);
      }
    },
  },
});

export default friendlist.reducer;

export const { addFriend } = friendlist.actions;
