import { Check } from "lucide-react";
import { TbRulerMeasure2 } from "react-icons/tb";
import box from "../assets/box.png";
const Price = () => {
  const hostingPlans = [
    {
      plan: "Z1 Tracker",
      description: "A great solution for tracking your device",
      originalPrice: "Rs 10000",
      discount: "Get 2% off",
      price: "Rs 9800",
      features: [
        "Instant Delivery",
        "Live Tracking",
        "Daily report with history",
        "Remote Engine ON/OFF",
        "90 days playback video",
        "Anti-Thieft Mode",
        "Over Speed Mode",
        "Geofences",
        "100+ Reports",
        "Alerts on Web, Mobile App & SMS",
      ],
      isPopular: TbRulerMeasure2,
    },
  ];

  return (
    <div className="flex flex-col items-center mt-2 lg:mt-3 px-2">
      <h1 className="text-4xl sm:text-4xl lg:text-5xl text-center tracking-wide mb-8">
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Pricing
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-40 ">
        {" "}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={box}
            alt="Pricing Image"
            className="w-full max-w-lg lg:max-w-xl h-[500px] object-cover hover:scale-125 transition-all pt-10"
          />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center pt-10">
          <div
            className={`relative w-full max-w-sm p-6 rounded-xl border-2 ${
              hostingPlans[0].isPopular ? "border-blue-200" : "border-gray-300"
            } hover:shadow-lg bg-white`}
          >
            {hostingPlans[0].isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-md">
                Most Popular
              </div>
            )}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {hostingPlans[0].plan}
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                {hostingPlans[0].description}
              </p>
            </div>
            <div className="text-center my-4">
              <span className="text-sm text-gray-400 line-through">
                {hostingPlans[0].originalPrice}
              </span>
              <span className="ml-2 text-sm font-semibold text-blue-600">
                {hostingPlans[0].discount}
              </span>
              <h3 className="text-4xl font-bold text-gray-800 mt-2">
                {hostingPlans[0].price}
              </h3>
            </div>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm">
              {hostingPlans[0].features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 ">
                  <Check size={20} style={{ color: "green" }} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
