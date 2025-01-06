const Order = () => {
  return (
    <div className="font-calibri flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-10 rounded-xl shadow-xl w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Purchase Now
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-left text-gray-700">
              Organization Name
            </label>
            <input
              type="text"
              placeholder="Enter Organization Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700">
              Organization Address
            </label>
            <input
              type="text"
              placeholder="Enter Organization Address"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700">
              Number of Devices
            </label>
            <input
              type="text"
              placeholder="Number of Devices"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700">Other Query</label>
            <textarea
              placeholder="Describe your query"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
