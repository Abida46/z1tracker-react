import { useState } from "react";
import { Link } from "react-router-dom";
import bikebanner from "../assets/bikebanner.jpg";
import logo from "../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email && password;

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bikebanner})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-grey opacity-40"></div>

      <div className="relative bg-white p-8 rounded-lg shadow-lg w-96 text-center opacity-95 z-10">
        <div className="mb-6">
          <img className="h-20 mx-auto" src={logo} alt="logo" />
        </div>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className={`w-full text-white p-3 rounded-md transition-all duration-300 ${
              isFormValid
                ? "bg-green-500 hover:bg-green-600 focus:ring-green-500"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Login
          </button>
          <div className="text-blue-800 mt-4">
            <Link to="/Register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
