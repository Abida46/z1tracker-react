import { Link } from "react-router-dom";
import appstore from "../assets/appstore.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import linked from "../assets/linked.png";
import playstore from "../assets/playstore.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  const footeritems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/About" },
    { label: "Services", to: "/" },
    { label: "Team", to: "/" },

    { label: "Contact", to: "/Contactus" },
  ];
  return (
    <footer className="bg-gradient-to-r from-blue-400 to-black-800 text-white py-10">
      <div className="flex justify-center mb-6">
        <ul className="flex space-x-6">
          <li>
            <Link
              to="https://www.facebook.com/p/Z1-Tracker-61558926121290/"
              target="_self"
              className="text-blue-800 hover:text-blue-600 hover:scale-125 transition-all"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="h-12 hover:scale-110 transition-all"
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://instagram.com/z1_gps_tracking_system"
              target="_self"
              className="text-blue-600 hover:text-blue-400 hover:scale-125 transition-all"
            >
              <img
                src={insta}
                alt="instagram"
                className="h-12 hover:scale-110 transition-all"
              />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-gradient-to-r from-pink-500 via-purple-600 to-orange-500 hover:scale-125 transition-all"
            >
              <img
                src={twitter}
                alt="Twitter"
                className="h-12 hover:scale-110 transition-all"
              />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-blue-600 hover:text-blue-400 hover:scale-125 transition-all"
            >
              <img
                src={linked}
                alt="Linked"
                className="h-12 hover:scale-110 transition-all"
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.facebook.com/p/Z1-Tracker-61558926121290/"
              target="_self"
              className="text-blue-800 hover:text-blue-600 hover:scale-125 transition-all"
            >
              <img
                src={youtube}
                alt="Youtube"
                className="h-12 hover:scale-110 transition-all"
              />
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-center mb-6">
        <ul className="flex space-x-8 text-sm md:text-base text-black">
          {footeritems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="hover:text-blue-800 hover:scale-110 transition-all"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center space-x-6 mb-6">
        <Link
          to="https://play.google.com/store/apps/details?id=com.zonetech.z1tracker&amp;pli=1"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src={appstore}
            alt="App Store"
            className="h-12 hover:scale-110 transition-all"
          />
        </Link>
        <Link
          to="https://play.google.com/store/apps/details?id=com.zonetech.z1tracker&amp;pli=1"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src={playstore}
            alt="play Store"
            className="h-12 hover:scale-110 transition-all"
          />
        </Link>
      </div>

      <p className="text-center text-black text-xs md:text-sm hover:scale-110 transition-all">
        ©2024 CopyRight | All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
