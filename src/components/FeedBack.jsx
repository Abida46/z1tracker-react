import { useState } from "react";
import { useNavigate } from "react-router-dom";
import review from "../assets/review.png";
import Star from "../components/Star";

const FeedBack = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = { name, email, message, rating };

    const existingFeedback =
      JSON.parse(localStorage.getItem("feedbacks")) || [];

    existingFeedback.push(newFeedback);

    localStorage.setItem("feedbacks", JSON.stringify(existingFeedback));

    navigate("/Review");
  };

  return (
    <div className="font:calibri relative mt-20 border-neutral-800 min-h-[300px]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            Give Your Feedback
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2 pt-12 flex justify-center">
          <img
            className="mb-5 w-full max-w-xs sm:max-w-sm lg:max-w-md"
            src={review}
            alt="review"
          />
        </div>

        <div className="pt-12 w-full lg:w-1/2 px-5 lg:px-10">
          <form className="p-5 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Enter Your Name:
              </label>
              <input
                id="name"
                className="h-10 w-full p-3 border rounded-md"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                className="h-10 w-full p-3 border rounded-md"
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Message:
              </label>
              <textarea
                id="message"
                className="w-full p-3 h-28 border rounded-md"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Rate Your Experience:
              </label>
              <Star rating={rating} onRate={setRating} />{" "}
            </div>

            <div className="">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-800 text-white py-3 px-6 rounded-md hover:scale-105 transition-transform"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
