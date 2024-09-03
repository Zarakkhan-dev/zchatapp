import { useState } from "react";
import  WaitingAcceptbox  from "../WaitingAcceptbox"
import FriendRequestSection from "../FriendRequestSection"
import SendRequestSection from "../SendRequestSection";
const Friendbox = ({ setFriendOption }) => {
  const[showBox,setShowbox] = useState ("");

  return (
    <>
      <div className="Interface top-0 left-0 h-screen w-screen fixed z-40 flex justify-center items-center">
        <div
          className="Dialogue-background top-0 left-0 h-screen w-screen fixed  flex justify-center items-center"
          onClick={() => setFriendOption(false)}
        >
          {" "}
        </div>
        <div className="Dialogue-Interface-Friend-option rounded bg-white h-2/3 w-2/3 z-50 relative">
          <div className="closebar flex justify-end my-6 mx-5">
            <i
              className="fa-solid fa-xmark fa-2xl cursor-pointer hover:text-[#6366f1] "
              onClick={() => setFriendOption(false)}
            ></i>
          </div>
          <div className="Search-bar w-1/2 mx-auto">
          
            <div className="Button my-4 flex gap-4">
            <button className="bg-[#6366f1] text-white  py-1 px-3 rounded-2xl hover:bg-[#6567d3] outline-none"  onClick={()=>setShowbox("pending")} >Friend Requests </button>
            <button className="bg-[#6366f1] text-white  py-1 px-3 rounded-2xl hover:bg-[#6567d3] outline-none" onClick={()=>setShowbox("sendrequest")}>Send requests</button>
            <button className="bg-[#6366f1] text-white  py-1 px-3 rounded-2xl hover:bg-[#6567d3] outline-none" onClick={()=>setShowbox("addfriend")}>Add Friend</button>
            </div>
                 {showBox === "" ? "":showBox === "pending" ? <FriendRequestSection/> : showBox === "sendrequest" ?< WaitingAcceptbox /> : <SendRequestSection/>  }
          </div>
        </div>
      </div>
    </>
  );
};

export default Friendbox;


