import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import feedback from "../assets/feedback.jpg";
import Star from "../components/Star";

const Review = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(storedFeedbacks);
  }, []);

  const handleDelete = (index) => {
    const updatedFeedbacks = feedbacks.filter((_, i) => i !== index);
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));
  };

  return (
    <div
      className="min-h-screen p-5"
      style={{
        backgroundImage: `url(${feedback})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="bg-white p-5 shadow-lg rounded-lg hover:shadow-xl transition-shadow relative hover:scale-110 transition-all "
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white h-12 w-12 flex items-center justify-center rounded-full text-lg font-bold mr-3">
                  <FaRegUser />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {feedback.name || "Anonymous"}
                  </h2>
                  {feedback.email && (
                    <p className="text-sm text-gray-600">{feedback.email}</p>
                  )}
                </div>
              </div>
              <p className="text-gray-800 text-sm">
                {feedback.message || "No review provided"}
              </p>

              {feedback.rating !== null && (
                <div className="mt-4">
                  <Star rating={feedback.rating} />
                </div>
              )}

              <button
                onClick={() => handleDelete(index)}
                className="absolute top-2 right-2 text-red-500 p-2 hover:scale-125"
                title="Delete Feedback"
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            <p className="text-lg">No reviews available yet.</p>
            <p className="mt-2">
              Submit your feedback on the{" "}
              <span className="text-blue-600 font-medium">Feedback</span> page!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
