import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import bikebanner from "../assets/bikebanner.jpg";
import logo from "../assets/logo.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = name && email && password;

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bikebanner})` }}
    >
      <div
        className="absolute inset-0 bg-grey 
      opacity-40"
      ></div>

      <div className="relative bg-white p-8 rounded-lg shadow-lg w-96 text-center opacity-95 z-10">
        <div className="mb-6">
          <img className="h-20 mx-auto" src={logo} alt="logo" />
        </div>
        <Link
          to="/Login"
          className="inline-flex mb-4 px-6 py-3 text-blue-600 transform hover:scale-105 transition-all duration-300 justify-start"
        >
          <FaArrowLeft className="mr-2" />
          <span className="font-medium">Register</span>
        </Link>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full p-3 rounded-md transition-all duration-300 ${
              isFormValid
                ? "bg-green-500 hover:bg-green-600 focus:ring-green-500"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
