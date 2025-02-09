import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

const Rating = ({ rating }) => {
  return (
    <>
      <div className="flex text-orange-400">
        <span>
          {rating >= 1 ? (
            <FaStar />
          ) : rating >= 0.5 ? (
            <FaStarHalfStroke />
          ) : (
            <FaRegStar />
          )}{" "}
        </span>
        <span>
          {rating >= 2 ? (
            <FaStar />
          ) : rating >= 1.5 ? (
            <FaStarHalfStroke />
          ) : (
            <FaRegStar />
          )}{" "}
        </span>
        <span>
          {rating >= 3 ? (
            <FaStar />
          ) : rating >= 2.5 ? (
            <FaStarHalfStroke />
          ) : (
            <FaRegStar />
          )}{" "}
        </span>
        <span>
          {rating >= 4 ? (
            <FaStar />
          ) : rating >= 3.5 ? (
            <FaStarHalfStroke />
          ) : (
            <FaRegStar />
          )}{" "}
        </span>
        <span>
          {rating >= 5 ? (
            <FaStar />
          ) : rating >= 4.5 ? (
            <FaStarHalfStroke />
          ) : (
            <FaRegStar />
          )}{" "}
        </span>
      </div>
    </>
  );
};

export default Rating;
