import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import whatsapp from "../assets/whatsapp.jpg";

const Contactus = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-16 px-4">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-12 text-center">
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          Contact Us for Further Queries
        </span>
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center space-y-6 hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link className="relative w-24 h-24" to="https://wa.me/9857050123">
            <img
              src={whatsapp}
              alt="WhatsApp Logo"
              className="w-full h-full rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </Link>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Contact us on WhatsApp
            </h3>
            <p className="text-gray-600 mt-2 text-sm">9857050123</p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6 hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link
            className="relative w-24 h-24"
            to="https://instagram.com/z1_gps_tracking_system"
          >
            <img
              src={insta}
              alt="Instagram Logo"
              className="w-full h-full rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </Link>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Contact us on Instagram
            </h3>
            <p className="text-gray-600 mt-2 text-sm">z1_gps_tracking_system</p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6 hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link
            className="relative w-24 h-24"
            to="https://www.facebook.com/p/Z1-Tracker-61558926121290/"
          >
            <img
              src={facebook}
              alt="Facebook Logo"
              className="w-full h-full rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </Link>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Contact us on Facebook
            </h3>
            <p className="text-gray-600 mt-2 text-sm">Z1 Tracker</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Call Us
          </span>
        </h2>
        <Link
          to="tel:+071-590132"
          className="inline-flex items-center justify-center w-16 h-16 bg-gray-300 text-black-500 font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110 relative overflow-hidden"
        >
          <span className="text-3xl">
            {" "}
            <PhoneCall />
          </span>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-40 animate-water-wave"></div>
        </Link>
      </div>
    </div>
  );
};

export default Contactus;
