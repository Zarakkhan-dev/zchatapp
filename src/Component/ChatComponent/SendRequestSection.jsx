import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "../ToastContainer/ToastContainer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SendRequestSection = () => {
  const data = useSelector((value) => {
    return value.UserDetail;
  });
  const [text, setText] = useState("");
  const [friend, setFriend] = useState("");
  const [Users, setUsers] = useState("");
  const submission = async (event) => {
    event.preventDefault();

    if (text === data[0].username) {
      toast.error(`friend Not found`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      let authenticate = Users.filter((item) => text === item.username);
      setFriend(authenticate);

      let user_found_status = authenticate.some((item)=>text ===item.username )
      if(user_found_status){
        toast.success(`🦄 friend Found`, {
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
      else{
        toast.error(`friend Not found`, {
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
    
    }
    setText("")
  };

  useEffect(() => {
    async function alluser() {
      try {
        let response = await axios.get(
          `http://localhost:3000/api/useraccount/allavailableuserforfriendrequest/${data[0].email}`
        );
        if (response.status === 200) {
          setUsers(response.data.filterusername)
        } else {
          setUsers("");
        }
      } catch (error) {
        console.log(error);
      }
    }
    alluser();
  }, [setUsers]);

 const   SendRequest = async(requestreceipt ,username)=>{
    try {
        let response = await axios.post("http://localhost:3000/api/requestbox/sendrequest" , { email:data[0].email ,sendername :data[0].username, requestreceipt,username } );
        if(response.status ===200){
            toast.success(`🦄 Send request Sucessfully `, {
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
        setText("")
    } catch (error) {
        console.log(error)
    }
 }
  return (
    <>
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
    <div className="List-friend-add mt-3">
    
      {friend && friend.length !== 0
        ? friend.map((item,index) => {
            return (
              <>
                <div className="Friends-section flex justify-between" key={index}>
                  <div className="profile flex items-center gap-3">
                    <div className="flex items-center justify-center h-8 w-8 bg-blue-600 rounded-full text-white">
                      {item.username.charAt(0).toUpperCase()}
                    </div>
                    <h1>{item.username}</h1>
                  </div>
                  <div className="sendrequest">
                    <button className="bg-[#6366f1] text-white rounded py-1 px-2 font-bold hover:bg-[#6264d3]" onClick={()=>SendRequest(item.email,item.username)}>
                      Send Request
                    </button>
                  </div>
                </div>
              </>
            );
          })
        : <div className="Find-friend-section h-20 flex justify-center items-center flex-col">
            <h1 className="font-bold text-sm">Find friends</h1>
            <p className="text-sm">You want to connect </p>
        </div>}
        </div>
      <ToastContainer />
    </>
  );
};

export default SendRequestSection;
