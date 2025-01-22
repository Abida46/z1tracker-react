import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/About" },

    { label: "Services", to: "Services" },

    { label: "Contactus", to: "/Contactus" },
    { label: "Blog", to: "/Blog" },
    { label: "Location", to: "/Location" },
  ];

  const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setmobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-40 py-0 backdrop-blur-lg border-neutral-700/80 shadow">
        <div className="container px-4 mx-auto relative text-sm bg-blue-200 ">
          <div className="flex justify-between items-center flex-col sm:flex-row">
            <div className="flex flex-shrink-0 text-xs sm:text-sm md:text-base lg:text-lg">
              Buy GPS tracker for bike and car Online
            </div>

            <div className="flex flex-wrap items-center space-x-2 md:space-x-6">
              <div className=" text-green-800">
                <Link
                  to="https://wa.me/9857050123"
                  aria-label="Chat with us on WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </Link>
              </div>

              <div className=" text-xs sm:text-sm md:text-base lg:text-lg">
                <Link to="https://wa.me/9857050123">9857050123</Link>
              </div>
              <div className="p-2 text-xs sm:text-sm md:text-base lg:text-lg">
                <Link to="tel:+977071590132">071-590132</Link>
              </div>
              <div className="p-2 text-xs sm:text-sm md:text-base lg:text-lg">
                <Link to="tel:+9779815483410">9815483410</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-10 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-20 w-30 mr-2" src={logo} alt="logo" />
            </div>
            <div>
              <ul className="hidden text-base lg:flex ml-14 space-x-12 pr-20">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex justify-center text-white space-x-12 items-center">
              {/* 
              <Link
                to="https://gps.z1nepal.com.np/login"
                target="_blank"
                className="bg-gradient-to-r from-blue-500 to-blue-600 py-3 px-5  rounded-md "
              >
                Sign In
              </Link>
              <Link
                to="/Order"
                className="bg-gradient-to-r from-blue-500 to-blue-600 py-2 px-3 sm:py-3 sm:px-4 mx-3 rounded-md text-sm sm:text-base"
              >
                Purchase Now
              </Link> */}
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-blue-100 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <Link to={item.to} onClick={toggleNavbar}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6 text-white">
                {/* <Link
                  to="https://gps.z1nepal.com.np/login"
                  target="_blank"
                  className="py-2 px-3 border rounded-md bg-gradient-to-r from-blue-500 to-blue-600"
                  onClick={toggleNavbar}
                >
                  Sign In
                </Link>
                <Link
                  to="/Order"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 py-2 px-3 sm:py-3 sm:px-4 mx-3 rounded-md text-sm sm:text-base"
                  onClick={toggleNavbar}
                >
                  Purchase Now
                </Link> */}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
