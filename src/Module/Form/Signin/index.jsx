import { Link } from "react-router-dom"
import FeatureSection from "../../../Component/loginComponent/FeatureSection"
import LoginForm from "../../../Component/loginComponent/LoginForm"
const index = () => {
  return (
<>
<div className="flex w-screen flex-wrap text-slate-800">
  <div className="flex w-full flex-col md:w-1/2">
    <div className="flex justify-center pt-12 md:justify-start md:pl-12">
      <a href="#" className="text-2xl font-bold text-blue-600"> Z.Chat . </a>
    </div>
    <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
      <p className="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
        Welcome back <br />
        to <span className="text-blue-600">Z.Chat</span>
      </p>
      <p className="mt-6 text-center font-medium md:text-left">Sign in to your account below.</p>
    <LoginForm/>

      <div className="py-12 text-center">
        <p className="text-gray-600">
          Don&apos;t have an account? &nbsp;
          <Link to= "/signup" className="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4">   
          Sign up for free.     
          </Link>
        </p>
      </div>
    </div>
  </div>
<FeatureSection/>
</div>

</>
  )
}

export default index
