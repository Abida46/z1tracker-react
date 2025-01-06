const Location = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Our Shop Location - Z1 Technology and Trade
      </h2>
      <iframe
        className="w-full h-[600px] rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.7555033513677!2d83.45133919999999!3d27.507978299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39969b521428599f%3A0xbd5c8fdd63570c2a!2sZ1%20Technology%20%26%20Trade%20Pvt.Ltd!5e0!3m2!1sen!2snp!4v1734706264106!5m2!1sen!2snp"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Location;
