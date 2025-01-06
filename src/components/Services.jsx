import asset from "../assets/asset.jpg";
import employee from "../assets/employee.jpeg";
import motorbike from "../assets/motorbike.jpg";
import publicbus from "../assets/publicbus.jpg";
import schoolbus from "../assets/schoolbus.jpg";
import vechile from "../assets/vehicle.jpg";

const Services = () => {
  const servicesData = [
    {
      imgSrc: motorbike,
      alt: "Bike GPS Tracker",
      title: "Bike GPS Tracker",
    },
    { imgSrc: vechile, alt: "Car GPS Tracker", title: "Car GPS Tracker" },
    {
      imgSrc: asset,
      alt: "Fleet Tracking System",
      title: "Fleet Tracking System",
    },
    {
      imgSrc: publicbus,
      alt: "Bus GPS Tracker",
      title: "Bus GPS Tracker",
    },
    {
      imgSrc: schoolbus,
      alt: "School Bus Tracker",
      title: "School Bus Tracker",
    },
    {
      imgSrc: employee,
      alt: "Employee Online Attendance with Live Tracking",
      title: "Employee Online Attendance With Live Tracking",
    },
  ];

  return (
    <div className="py-5 px-8 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-10lg:mt-20 tracking wide">
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            Our Services
          </span>
        </h2>
        <p className="pt-10 text-gray-600 text-lg">
          Explore our diverse range of GPS tracking solutions crafted for your
          needs.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative mb-4">
              <img
                src={service.imgSrc}
                alt={service.alt}
                className="w-full h-40 object-contain rounded-md transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {service.title}
            </h2>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg text-sm font-medium shadow-md transition hover:opacity-90 focus:outline-none">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
