import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "../ToastContainer/ToastContainer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const WaitingAcceptbox = () => {
  const data = useSelector((value) => {
    return value.UserDetail;
  });

  const [alluser, setUser] = useState([]);
  useEffect(() => {
    async function ALLuser() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/requestbox/allsendrequest/${data[0].email}`
        );
        if (response.status === 200) 
         console.log( response.data.pendingrequests[0].requestreceipt)
          setUser(response.data.pendingrequests);
      } catch (error) {
        console.log(error);
      }
    }
    ALLuser();
  },[setUser]);

  const Cancelrequest =async (email,receiptemail)=>{
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
        
       let filterPendingRequest = alluser.filter((item)=> item.requestreceipt !==receiptemail  );
       setUser(filterPendingRequest)
      }
      else{
        alert("Internal Error")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="Accept-request-box mt-3">
        <h1 className="font-bold ">All send Requests </h1>

        {alluser && alluser.length > 0
          ? alluser.map((item, index) => {
              return (
                <div className="Send-pending-request flex justify-between my-2" key={index}>
                  <div className="profile flex items-center gap-3">
                    <div className="flex items-center justify-center h-8 w-8 bg-blue-600 rounded-full text-white">
                      {item.username.charAt(0).toUpperCase()}
                    </div>
                    <h1>{item.username}</h1>
                  </div>
                    <button className="btn bg-[#6366f1] text-white rounded py-1 px-2 font-bold hover:bg-[#6264d3]" onClick={()=>Cancelrequest(data[0].email,item.requestreceipt)}>Cancel Request</button>
                </div>
              );
            })
          : <div className=" h-24 flex justify-center items-center">
            <h1 className=" text-sm"> No request send </h1>
             </div>}
      </div>
      <ToastContainer />
    </>
  );
};

export default WaitingAcceptbox;
