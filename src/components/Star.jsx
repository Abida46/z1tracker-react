import { FaStar } from "react-icons/fa6";
// eslint-disable-next-line react/prop-types
const Star = ({ rating, onRate }) => {
  const stars = [1, 2, 3, 4, 5];

  const handleClick = (value) => {
    onRate(value);
  };

  return (
    <div className="flex">
      {stars.map((star) => (
        <span
          key={star}
          className={`cursor-pointer text-2xl ${
            rating >= star ? "text-yellow-400" : "text-gray-200"
          }`}
          onClick={() => handleClick(star)}
        >
          <FaStar />
        </span>
      ))}
    </div>
  );
};

export default Star;
