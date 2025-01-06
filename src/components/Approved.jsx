import nepallogo1 from "../assets/nepallogo1.png";
import ntalogo from "../assets/nta-logo.png";

const Approved = () => {
  return (
    <div className="mt-5 mb-10 lg:w-full border-neutral">
      <div className="flex flex-wrap justify-center items-center">
        <img className="h-40 w-40 mb-5 mx-10" src={ntalogo} alt="NTA Logo" />
        <img
          className="h-40 w-40 mb-5 mx-10"
          src={nepallogo1}
          alt="Government of Nepal Logo"
        />
        <div>
          <h2 className="font-bold text-center p-10">
            Approved and Licensed By Government Of Nepal
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Approved;
