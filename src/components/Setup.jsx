import { CheckCircle2 } from "lucide-react";
import setup from "../assets/setup.jpg";
import { checklistItems } from "../constants";
const Setup = () => {
  return (
    <div className="relative mt-10 border-neutral-800 min-h-[300px]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-10lg:mt-10 tracking wide">
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            Get started in 4 steps
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="p-2  w-half lg:w-1/2 pt-10">
          <img className="mb-4 " src={setup} alt="vechile"></img>
        </div>
        <div className="pt-12 w-full lg:w-1/2 mt-20">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12 ">
              <div className="text-blue-400 mx-6  h-10 w-10 p-2 justofy-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text:xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Setup;
