import { IoLocationSharp } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
const PlaceCard = ({ img, title, location, description, price, rating }) => {
  return (
    <div className="shadow-lg transition-all mb-20 duration-500 hover:shadow-xl cursor-pointer h-[450px] flex flex-col">
      <div className="overflow-hidden">
        <img
          src={img}
          alt="No image"
          className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-between space-y-2 p-3 flex-grow">
        <div>
          <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
          <div className="flex items-center gap-2 font-semibold opacity-70">
            <IoLocationSharp />
            <span className="text-sm text-gray-600">{location}</span>
          </div>
          <p className="line-clamp-2 font-semibold text-[15px] overflow-hidden">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between border-t-2 py-3 mt-3">
          <div className="opacity-70 font-semibold">
            <p className="text-yellow-400 flex gap-2 items-center">
              {[...Array(5)].map((_, i) => {
                if (i + 1 <= rating) {
                  return <IoIosStar key={i} />;
                } else if (i < rating) {
                  return <IoIosStarHalf key={i} />;
                } else {
                  return <IoIosStarOutline key={i} />;
                }
              })}
            </p>
            <p className="text-gray-400 text-sm font-semibold">584 reviews</p>
          </div>
          <div>
            <p className="text-2xl text-[#008EC4] font-bold">${price}</p>
            <p className="text-gray-400 text-sm font-semibold">per person</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
