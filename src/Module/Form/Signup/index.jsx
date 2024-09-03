import { Link } from "react-router-dom";
import "./signup.css";
import FeatureSection from "../../../Component/signupComponent/FeatureSection";
import SignupForm from "../../../Component/signupComponent/SignupForm";
const Signup = () => {
  return (
    <div className="flex w-screen flex-wrap text-slate-800">
      <FeatureSection />
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <a href="#" className="text-2xl font-bold text-blue-600">
            {" "}
            Z.Chat .{" "}
          </a>
        </div>
        <div className=" mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
            Create your free account
          </p>
          <p className="mt-6 text-center font-medium md:text-left">
            Already using Z.Chat? &nbsp;
            <Link
              to="/login"
              className="whitespace-nowrap font-semibold text-blue-700"
            >
              Login here
            </Link>
          </p>
          <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
            <img className="mr-2 h-5" src="" alt /> Get started with Google
          </button>
          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
              Or use email instead
            </div>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
