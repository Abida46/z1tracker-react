import Imageslider from "./Imageslider";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center  lg-20">
      <div className="flex  justify-center rounded-lg w-full  shadow-blue-400 mx-2 ">
        <Imageslider />
      </div>
    </div>
  );
};

export default HeroSection;
