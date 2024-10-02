import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import Img from "../../assets/places/boat.jpg";
const DetailsPlace = () => {
  return (
    <div className="font-sans tracking-wide max-md:mx-auto">
      <div className="bg-gradient-to-r md:min-h-[600px] grid items-start grid-cols-1 lg:grid-cols-5 md:grid-cols-2">
        <div className="lg:col-span-3 h-full p-8">
          <div className="relative h-full flex items-center justify-center lg:min-h-[580px]">
            <img
              src={Img}
              alt="img"
              className="w-full "
            />

            <div className=" p-10 flex space-x-4 items-end absolute right-0 max-md:right-4 md:bottom-4 bottom-0">
              <div className="bg-[#008EC4] w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 fill-[#fff] inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div className="bg-[#fff] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 fill-[#27b7f5] inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2  mt-4 py-6 px-8 h-full">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Boat</h2>

            <div className="flex space-x-1 mt-4">
              <div className="opacity-80 font-semibold">
                <p className="text-yellow-400 flex gap-2 items-center">
                  <IoIosStar />
                  <IoIosStar />

                  <IoIosStarHalf />

                  <IoIosStarOutline />
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800">Location : USA</h3>
            <p className="text-[#008EC4] text-3xl font-bold mt-4">$6700</p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-[#008EC4]">Amenities</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              <span type="button" className="w-[22] h-10 ">
                Gym -
              </span>
              <span type="button" className="w-22 h-10">
                WiFi -
              </span>
              <span type="button" className="w-30 h-10 ">
                Swimming Pool -
              </span>
              <span type="button" className="w-30 h-10 ">
                Restaurants -
              </span>
              <span type="button" className="w-30 h-10 ">
                Gift Shops
              </span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-[#008EC4]">Activities</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="w-30 h-10 ">Historical Tour -</span>
              <span className="w-30 h-10">Photography -</span>
              <span className="w-30 h-10 ">Shopping </span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-[#008EC4]">Description</h3>
            Beautiful beachfront resort with luxury amenities
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              type="button"
              className="min-w-[200px] px-4 py-3 bg-[#008EC4]  text-white text-sm font-semibold rounded"
            >
            Book Now
            </button>
          </div>

        
        </div>
      </div>

      <div className="mt-8 max-w-2xl px-6">
        <h3 className="text-lg font-bold text-[#008EC4]">Health Conditions </h3>

        <ul className="grid sm:grid-cols gap-3 mt-4">
          <li className="flex items-center text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                data-original="#000000"
              />
            </svg>
            <span className="text-[18px] font-mono">Name: </span>  Migraine Headaches          </li>
          

          <li className="flex items-center text-sm text-gray-600">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              className="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                data-original="#000000"
              />
            </svg>
            <span className="text-[18px] font-mono">Symptoms: </span> 
          
            Throbbing pain, nausea, sensitivity to light and sound
          </li>
        </ul>

        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-800">
            Description
          </h3>
          <p className="text-sm text-gray-600 mt-4">
          Migraine is a neurological condition characterized by recurrent severe headaches often accompanied by other symptoms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPlace;
