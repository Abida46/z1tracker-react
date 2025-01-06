import { choose } from "../constants";
const Reason = () => {
  return (
    <>
      <div className="relative mt-10 border-neutral-800 min-h-[500px]">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-10lg:mt-20 tracking wide">
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
              Why Choose Z1 Tracking GPS?
            </span>
          </h2>
          <div className="text-center  sm:text-2xl large:text-4xl mt-8 lg:mt-15  text-neutral-500 tracking wide">
            As a leading GPS tracking company in Nepal , z1 tracking GPS holds
            the strongest position amongst similar companies. Since our launch
            in 2024 , we have always focused on providing excellent Customer
            Service and upgrading various Products Features.
          </div>
          <div className="mt-8 lg:mt-15 "></div>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20 w-full">
          {choose.map((choose, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 text-center">
              <div className="flex justify-center">
                <div className="flex h-12 w-12  text-blue-700 text-xl justify-center items-center rounded-full">
                  {choose.icon}
                </div>
              </div>
              <h5 className="mt-4 text-xl">{choose.text}</h5>
              <p className="text-md p-2 mb-20 text-neutral-500">
                {choose.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Reason;
