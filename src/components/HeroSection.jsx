import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Imageslider from "./Imageslider";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start w-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="w-full lg:w-3/4">
        <div className="aspect-w-16 aspect-h-9 bg-gray-300 overflow-hidden shadow-lg rounded-lg">
          <Imageslider />
        </div>
      </div>

      <div className="w-full lg:w-1/4 bg-white shadow-lg p-8 flex flex-col items-center relative rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          <img className="h-20 mx-auto" src={logo} alt="logo" />
        </h2>
        <p className="text-gray-600 text-center mb-6 font-medium">
          Please login to continue.
        </p>

        <form className="w-full space-y-6">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition hover:border-blue-400 shadow-sm"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition hover:border-blue-400 shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-md p-3 hover:from-blue-600 hover:to-blue-700 transition shadow-lg"
          >
            Login
          </button>

          <div className="text-blue-800 mt-4 text-center">
            <Link
              to="https://gps.z1nepal.com.np/register"
              className="hover:underline hover:text-blue-600 transition font-medium"
            >
              Register
            </Link>
          </div>
        </form>

        <div className="w-full border-t my-8 border-gray-300 relative">
          <span className="absolute bg-white px-4 -top-3 left-1/2 transform -translate-x-1/2 text-gray-500 font-medium">
            OR
          </span>
        </div>

        <h3 className="text-lg font-medium text-gray-700 mb-4 text-center">
          Want to Purchase?
        </h3>
        <Link
          className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold rounded-md p-3 hover:from-green-500 hover:to-green-600 transition shadow-lg text-center"
          to="/Order"
        >
          Purchase Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
