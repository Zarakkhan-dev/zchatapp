import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "../ToastContainer/ToastContainer";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
    const navigate = useNavigate();
    const [userData,setUserData] = useState({email:"",password:""})

    const handler = (event)=>{
    const {name,value} = event.target;

    setUserData((previous)=>{
        return{
            ...previous,
            [name] :value
        }
    })
    }
    const submission =async (event)=>{
        event.preventDefault();
        try {
            const {email ,password} = userData;
            const response = await axios.post("http://localhost:3000/api/useraccount/login" , {email,password});
            console.log(response.status)
            if (response.status === 200) {
                toast.success(`🦄 ${response.data.message}!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    onClose : ()=>{
                        localStorage.setItem("accesstoken", response.data.accesstoken);
                        localStorage.setItem("refreshtoken", response.data.refreshtoken);
                        setUserData({
                          username: "",
                          email: "",
                          password: "",
                          confirmPassword: "",
                        });
                        navigate("/")
                    }
                  });
              } else {
                toast.error(`🦄 ${response.data.message}`, {
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
       
    }
  return (
    <>
      <form
        className="flex flex-col items-stretch pt-3 md:pt-8"
        onSubmit={submission}
        method="post"
      >
        <div className="flex flex-col pt-4">
          <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input
              type="email"
              id="login-email"
              className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Email"
              name="email"
              onChange={handler}
              value={userData.email}
            />
          </div>
        </div>
        <div className="mb-4 flex flex-col pt-4">
          <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input
              type="password"
              id="login-password"
              className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Password"
              name="password"
              onChange={handler}
              value={userData.password}
            />
          </div>
        </div>
        <a
          href="#"
          className="mb-6 text-center text-sm font-medium text-gray-600 md:text-left"
        >
          Forgot password?
        </a>
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
        >
          Sign in
        </button>
      </form>
      <ToastContainer/>
    </>
  );
};

export default LoginForm;
