import FeatureSignup from "../../assets/Picture/FeatureSignup.png"
const FeatureSection = () => {
  return (
    <>
      <div className="relative hidden h-screen select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2">
        <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
          <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
            New Feature
          </span>
          <p className="my-3 text-3xl font-semibold leading-10">
            Chat with people you know
          </p>
          <p >Get start to interact with user</p>
        </div>
        <div className="feature-Image flex justify-center ">
        <img
          className=" w-[50%] h-[100%] object-contain"
          src={FeatureSignup}
        />
        </div>
       
      </div>
    </>
  )
}

export default FeatureSection
