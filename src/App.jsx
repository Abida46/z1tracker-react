import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Approved from "./components/Approved";
import Blog from "./components/Blog";
import Contactus from "./components/Contactus";
import FeatureSection from "./components/FeatureSection";
import FeedBack from "./components/FeedBack";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Location from "./components/Location";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Price from "./components/Price";
import Register from "./components/Register";
import Review from "./components/Review";
import Services from "./components/Services";
import Setup from "./components/Setup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <span className="max-w-full mx-auto ">
                <HeroSection />
              </span>
              <div className="max-w-8xl mx-auto  px-6">
                <Setup />
                <FeatureSection />
                <Price />
                <FeedBack />
                <Approved />
              </div>
            </div>
          }
        />

        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
