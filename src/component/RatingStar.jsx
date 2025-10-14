import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ value }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => {
        if (value >= i) {
          return (
            <FaStar
              key={i}
              className="w-4 h-4 fill-blue-900 text-blue-900 transition-colors"
            />
          );
        } else if (value >= i - 0.5) {
          return (
            <FaStarHalfAlt
              key={i}
              className="w-4 h-4 fill-blue-900 text-blue-900 transition-colors"
            />
          );
        } else {
          return (
            <FaStar
              key={i}
              className="w-4 h-4 fill-white text-blue-900 stroke-blue-900 stroke-[30]"
            />
          );
        }
      })}
    </div>
  );
};

export default Rating;
