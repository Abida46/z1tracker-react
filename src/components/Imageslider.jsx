import { useEffect, useState } from "react";
import bikebanner from "../assets/bikebanner.jpg";
import schoolbanner from "../assets/schoolbanner.jpg";

const images = [bikebanner, schoolbanner];
const Imageslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Optional: Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Change slides every 4 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-80 sm:h-auto overflow-hidden">
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-3 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 z-10"
        onClick={prevSlide}
      >
        ❮
      </button>

      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full sm:h-auto object-cover sm:object-contain transition-transform duration-500 ease-in-out"
      />

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-3 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 z-10"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default Imageslider;
