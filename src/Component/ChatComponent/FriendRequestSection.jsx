import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allpendingrequest } from "../../State/pendingrequest";
import { ToastContainer } from "../ToastContainer/ToastContainer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FriendRequestSection = () => {
  const [alertPendingMessage, setalertPendingMessage] = useState();
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.UserDetail;
  });
  const friendrequest = useSelector((state) => {
    return state.pendingrequest;
  });

  const createConversation = async (userId,requestreceipt,receiveremail) => {
  try {
    const response = await axios.post ("http://localhost:3000/api/requestbox/connectionconversation" ,{userId,requestreceipt,receiveremail});

    if(response.status ===200){
      toast.success(`🦄 ${response.data.message} `, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      let filterPendingRequest =friendrequest[0].filter((item)=>item.email !== requestreceipt);
      dispatch(allpendingrequest(filterPendingRequest));
    }
      else{
        toast.success(`🦄 ${response.data.message} `, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
  } catch (error) {
    console.log(error)
  }
  };



  const submission = (event) => {
    event.preventDefault();
  };
  const CancelRequest =async (email,receiptemail)=>{
    try {
       const response = await axios.post("http://localhost:3000/api/requestbox/cancelrequest",{email,receiptemail})
      if(response.status ===200){
        toast.success(`🦄 Request Cancel `, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        
       let filterPendingRequest =friendrequest[0].filter((item)=>item.email !== email);
       dispatch(allpendingrequest(filterPendingRequest));
      }
      else{
        alert("Internal Error")
      }
    } catch (error) {
      console.log(error)
    }
  }

   //Getting all friend Requests
   useEffect(() => {
    async function API_response() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/requestbox/pendingrequest/${data[0].email}`
        );
        console.log(response.data);
        if (response.status === 200) {
          dispatch(allpendingrequest(response.data.friends));
        } else {
          setalertPendingMessage(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    API_response();
  }, [allpendingrequest]);
  return (
    <>
      <div className="friend-request-interface my-3 mx-3  ">
      <div className="Search-Box flex   items-center gap-4 border py-2 px-3 rounded-2xl ">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <form className=" w-full" onSubmit={submission}>
                    <input
                      type="text"
                      name="text"
                      placeholder="Search for Friend"
                      className="outline-none w-full "
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </form>
                </div>
        <h1 className="text-[#111012]  font-bold">Friend requests </h1>
        {friendrequest.length === 0 ? (
          <div className="No-pending-request  w-full h-20 flex justify-center items-center ">
            <h1 className=" text-sm"> {alertPendingMessage}</h1>
          </div>
        ) : friendrequest.length && Array.isArray(friendrequest[0]) ? (
          friendrequest[0].map((items) => {
            return (
              <>
                <div className="friendrequestlist flex justify-between items-center mt-3">
                  <div className="userprofile flex items-center gap-2">
                    <div className="flex items-center justify-center h-8 w-8 bg-blue-600 rounded-full text-white">
                      {items.sendername.charAt(0).toUpperCase()}
                    </div>
                    <h1>{items.sendername}</h1>
                  </div>
                  <div className="btn-requestlist flex gap-2">
                    <button
                      className="bg-[#6366f1] text-white rounded py-1 px-2 font-bold hover:bg-[#6264d3]"
                      onClick={() => createConversation(data[0].id,items.email,data[0].email)}
                    >
                      Accept
                    </button>
                    <button className="bg-red-700 text-white py-1 px-2 rounded hover:bg-red-500 font-bold" onClick={()=>CancelRequest(items.email,data[0].email)}>
                      X
                    </button>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          ""
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default FriendRequestSection;
