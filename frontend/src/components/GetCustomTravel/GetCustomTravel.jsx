import { Link } from "react-router-dom";
import Img3 from "../../assets/places/water.jpg";

const GetCustomTravel = () => {
  return (
    <div className="min-h-[370px] my-10  mt-20 border-gray-200 border-2">
      <div className="min-h-[370px] flex px-[60px] justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
        <div className="container ">
          <div className="grid grid-cols-1 py-10 sm:grid-cols-2 gap-6 items-center">
            {/* Image section */}
            <div data-aos="flip-up">
              <img
                src={Img3}
                alt="biryani img"
                className="max-w-[450px] h-[350px] w-full mx-auto rounded-xl object-cover"
              />
            </div>
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
                Get Your Perfect Healthy Tript{" "}
              </h1>
              <hr />
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-8"
              >
                Get your perfect healthy trip tailored just for you. Our
                personalized approach ensures every aspect of your journey
                aligns with your wellness goals. Embark on a transformative
                experience designed to rejuvenate mind, body, and spirit
              </p>
              <div data-aos="zoom-in" className="grid m-4 grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Link  to='/CustomTravel'>
                    <button className="bg-[#008EC4] hover:bg-[#008EC4] transition-all text-white rounded-full px-5 py-2.5">
                      Get start
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCustomTravel;
