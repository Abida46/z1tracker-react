import { features } from "../constants";
const FeatureSection = () => {
  return (
    <div className="relative mt-20  border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-10lg:mt-20 tracking wide">
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            What makes us stand out?
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20 w-full">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/2">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2  text-blue-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
            </div>
            <h5 className="mt-1 mb-6 text-xl">
              {feature.text}
              <p className="text-md p-2 mb-20 text-neutral-500">
                {feature.description}
              </p>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
