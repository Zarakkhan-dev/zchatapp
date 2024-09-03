import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userInfo } from "../../State/userdata";
import LogoSection from "../../Component/ChatComponent/LogoSection";
import ProfileView from "../../Component/ChatComponent/ProfileView";
import ContactList from "../../Component/ChatComponent/ContactList";
import Chatinterface from "../../Component/ChatComponent/Chatinterface";
import Friendbox from "../../Component/ChatComponent/DialogBox/Friendbox";
const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [friendOption,setFriendOption] = useState(false)
  const [loader, setLoader] = useState("");
  useEffect(() => {
    async function tokenverfiy() {
      const tokenCheck = localStorage.getItem("accesstoken");
      if (tokenCheck) {
        try {
          const response = await axios.post(
            "http://localhost:3000/api/useraccount/tokenverify",
            { accesstoken: tokenCheck }
          );

          if (response.status === 200) {
            const { username, email, id } = response.data;
            dispatch(userInfo({ id, username, email }));

            
          } else {
            navigate("/login");
          }
        } catch (error) {
          console.error("Token verification failed:", error);
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    }

    setTimeout(() => {
      setLoader(false);
    }, 3000);
    tokenverfiy();
  }, [dispatch, navigate]);
  return (
    <>
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
        <LogoSection/>
          <ProfileView/>
          <div className="FriendOption mt-6 flex justify-end mb-2">
          <i className="fa-solid fa-user-group  cursor-pointer hover:text-[#6366f1] " onClick={()=>setFriendOption(true)}></i>
          {friendOption ? <Friendbox setFriendOption={setFriendOption} /> :"" }
          </div>
         
            <div className="flex flex-col mt-1">
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Conversations</span>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  4
                </span>
              </div>
          <ContactList/>
            </div>
          </div>

            <Chatinterface/>

        </div>
      </div>
    </>
  );
};

export default Index;
