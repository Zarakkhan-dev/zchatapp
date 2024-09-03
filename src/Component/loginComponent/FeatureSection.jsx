import FeatureLogin from "../../assets/Picture/FeatureLogin.png"
const FeatureSection = () => {
  return (
    <>
      <div className="relative hidden h-screen select-none bg-blue-600 bg-gradient-to-br md:block md:w-1/2">
        <div className="py-16 px-8 text-white xl:w-[40rem]">
          <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
            New Feature
          </span>
          <p className="my-2 text-3xl font-semibold leading-10">Lets talk.</p>
          <p className="mb-4">Communication become Easy </p>
          <a
            href="#"
            className="font-semibold tracking-wide text-white underline underline-offset-4"
          >
            Learn More
          </a>
        </div>

        <div className="feature-Image flex justify-center">
          <img className=" w-[50%] h-[100%]  object-cover" src={FeatureLogin} />
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
