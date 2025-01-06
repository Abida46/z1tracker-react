const About = () => {
  return (
    <div className="font-calibri bg-gray-50 p-6 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-2xl p-6 mb-6 max-w-4xl w-full space-y-6">
        <div className="bg-white shadow-xl rounded-lg p-6 mb-6 transform transition-all duration-300 hover:scale-105">
          <h1 className="text-blue-600 text-3xl font-semibold mb-4">
            Z1 Tracker: Revolutionizing Vehicle Tracking
          </h1>
          <p className="text-gray-700 leading-relaxed">
            In today&apos;s fast-paced world, managing a fleet of vehicles
            efficiently is crucial for businesses of all sizes. Z1 Tracker
            offers a cutting-edge solution for vehicle tracking, empowering
            businesses with real-time insights and control over their assets.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 mb-6 transform transition-all duration-300 hover:scale-105">
          <h1 className="text-blue-600 text-3xl font-semibold mb-4">
            How Z1 Tracker Works
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Z1 Tracker utilizes advanced GPS technology combined with robust
            software to provide accurate and reliable vehicle tracking. Each
            vehicle is equipped with a Z1 Tracker device that communicates with
            satellites to determine its precise location.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 mb-6 transform transition-all duration-300 hover:scale-105">
          <h1 className="text-blue-600 text-3xl font-semibold mb-4">
            Key Features and Benefits
          </h1>
          <ul className="list-none space-y-4">
            <li className="text-blue-500 text-xl">
              <strong>Real-Time Tracking:</strong>
            </li>{" "}
            Monitor your vehicle&apos;s locations in real-time, enabling you to
            optimize routes and respond promptly to any issues or emergencies.
            <li className="text-blue-500 text-xl">
              <strong>Geofencing:</strong>
            </li>{" "}
            Define custom geofences and receive instant notifications when a
            vehicle enters or leaves a designated area, enhancing security and
            efficiency.
            <li className="text-blue-500 text-xl">
              <strong>Driver Behavior Monitoring:</strong>{" "}
            </li>
            Track driver behavior such as speeding, harsh braking, and idle
            time, promoting safer driving habits and reducing fuel costs.
            <li className="text-blue-500 text-xl">
              <strong>Historical Data Analysis:</strong>{" "}
            </li>
            Access detailed historical trip data to analyze trends, identify
            areas for improvement, and make informed business decisions.
            <li className="text-blue-500 text-xl">
              <strong>Integration:</strong>
            </li>{" "}
            Seamlessly integrate Z1 Tracker with your existing fleet management
            systems or third-party applications for enhanced functionality and
            convenience.
          </ul>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 mb-6 transform transition-all duration-300 hover:scale-105">
          <h1 className="text-blue-600 text-3xl font-semibold mb-4">
            Why Choose Z1 Tracker?
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Z1 Tracker stands out from the competition due to its reliability,
            versatility, and user-friendly interface. Whether you operate a
            small delivery service or manage a large transportation fleet, Z1
            Tracker offers the tools and support you need to streamline
            operations, reduce costs, and enhance overall efficiency.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 mb-6 transform transition-all duration-300 hover:scale-105">
          <h1 className="text-blue-600 text-3xl font-semibold mb-4">
            Get Started Today
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Experience the power of Z1 Tracker and take your vehicle tracking
            capabilities to the next level. Contact us today to learn more and
            schedule a demo. Transform your fleet management with Z1 Tracker!
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
