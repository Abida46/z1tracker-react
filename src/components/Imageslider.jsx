import { useEffect, useState } from "react";
import bikebanner from "../assets/banner.jpg";
import schoolbanner from "../assets/banner2.jpg";

const images = [bikebanner, schoolbanner];

const Imageslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Change slides every 4 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-[95%] sm:w-[90%] lg:w-[100%] mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Previous Slide Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-3 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 z-10"
        onClick={prevSlide}
      >
        ❮
      </button>

      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 ease-in-out ${
              index === currentIndex
                ? "scale-100 opacity-100"
                : "scale-90 opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Next Slide Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-3 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 z-10"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-gray-500 scale-100"
            } transition-all duration-300 focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Imageslider;
