import { TfiReload } from "react-icons/tfi";
const Hero = ({handlePointClick}) => {
  return (
    <div className=" bg-black/20   h-full">
      <div className="h-full flex justify-center items-center px-[30px] sm:px-[60px] ">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="font-semibold">
            Good Morning!</p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-[40px] "
            >
              Search Your Destination
            </p>
          </div>

          <div
  data-aos="fade-up"
  data-aos-delay="600"
  className="space-y-4 bg-white rounded-md p-4 relative shadow-lg"
>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
    <div>
      <label htmlFor="destination" className="opacity-70  font-semibold">
        Search your Destination
      </label>
      <input
        type="text"
        name="destination"
        id="destination"
        placeholder="Add destination"
        className="w-full bg-gray-100 my-2 text-center  focus:outline-[#008EC4] focus:outline outline-[2px] rounded-full p-2"
      />
    </div>
    <div>
      <label htmlFor="date" className="opacity-70  font-semibold">
        Date
      </label>
      <input
        type="date"
        name="date"
        id="date"
        className="w-full opacity-70  bg-gray-100 my-2 rounded-full text-center focus:outline-[#008EC4] focus:outline outline-[2px] p-2"
      />
    </div>
    <div>
      <label htmlFor="maxPrice" className="opacity-70 block">
        <div className="w-full flex justify-between items-center">
          <p>Max Price</p>
          <p className="font-bold text-xl">$ <span id="maxPriceValue">989</span></p>
        </div>
      </label>
      <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
        <input
          type="range"
          name="maxPrice"
          id="maxPrice"
          className="appearance-none w-full bg-[#008EC4] h-2 rounded-full my-2"
          min="150"
          max="1000"
          step="10"
          onInput={(e) => document.getElementById('maxPriceValue').innerText = e.target.value}
        />
      </div>
    </div>
  </div>
  <button className="bg-[#008EC4] hover:bg-[#0878c2e8] text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 transform -translate-x-1/2">
    Search Now
  </button>
</div>

<div className="flex items-center justify-center mt-[85px]">
  <button  onClick={handlePointClick}  className="bg-[#008dc4ec] hover:bg-[#0878c2e8] text-white hover:scale-105 p-2 rounded-full duration-200">
  <TfiReload  className=""/>
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
