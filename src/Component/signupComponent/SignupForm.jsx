import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "../ToastContainer/ToastContainer";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignupForm = () => {
    const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handler = (event) => {
    const { name, value } = event.target;
    setUserData((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };
  const submission = async (event) => {
    event.preventDefault();

    try {
      if (userData.password === userData.confirmPassword) {
        const response = await axios.post(
          "http://localhost:3000/api/useraccount/signup",
          {
            username: userData.username,
            email: userData.email,
            password: userData.password,
          }
        );
        if (response.status === 201) {
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
                navigate("/login")
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
      } else {
        toast.error("🦄 Internal Error ", {
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
      console.log(error);
    }
  };
  return (
    <>
      <form
        className="flex flex-col items-stretch pt-3 md:pt-3"
        onSubmit={submission}
        method="post"
      >
        <div className="flex flex-col pt-4">
          <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input
              type="text"
              id="login-name"
              className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Username"
              required
              name="username"
              onChange={handler}
              value={userData.username}
            />
          </div>
        </div>
        <div className="flex flex-col pt-4">
          <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input
              type="email"
              id="login-email"
              className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Email"
              required
              name="email"
              onChange={handler}
              value={userData.email}
            />
          </div>
        </div>
        <div className="flex flex-col pt-4">
          <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input
              type="password"
              id="login-password"
              className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Password (minimum 8 characters)"
              required
              name="password"
              onChange={handler}
              value={userData.password}
            />
          </div>
        </div>
        <div className="mb-4 flex flex-col pt-4">
          <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input
              type="password"
              id="login-confirm-password"
              className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Confirm Password (minimum 8 characters)"
              required
              name="confirmPassword"
              onChange={handler}
              value={userData.confirmPassword}
            />
          </div>
        </div>
        <div className="block">
          <input
            className="box-check-signup mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-600 focus:border-blue-600 focus:shadow"
            type="checkbox"
            id="remember-me"
            required
          />
          <label className="inline-block" htmlFor="remember-me">
            {" "}
            I agree to the{" "}
            <a className="underline" href="#">
              Terms and Conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
        >
          Sign in
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default SignupForm;
