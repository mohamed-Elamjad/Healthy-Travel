import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";
import AllPlacesCard from "./AllPlacesCard";
const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    price: 6700,
    rating: 4,
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    rating: 4.5,
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    rating: 3,
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    rating: 5,
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    rating: 2,
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    rating: 3.5,
  },
];

const AllPlaces = () => {
  return (
    <section className="py-10 relative ">
      <div className="w-full  mx-auto  px-[60px]  ">
        {/* titre sort */}
        <div className="flex flex-col items-center lg:flex-row lg:items-center max-lg:gap-4 justify-between w-full">
          <h1>Search your destinations</h1>
          <div className="relative w-[210px]  ">
            <svg
              className="absolute top-1/2 -translate-y-1/2 left-4 z-10"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5555 3.33203H3.44463C2.46273 3.33203 1.66675 4.12802 1.66675 5.10991C1.66675 5.56785 1.84345 6.00813 2.16004 6.33901L6.83697 11.2271C6.97021 11.3664 7.03684 11.436 7.0974 11.5068C7.57207 12.062 7.85127 12.7576 7.89207 13.4869C7.89728 13.5799 7.89728 13.6763 7.89728 13.869V16.251C7.89728 17.6854 9.30176 18.6988 10.663 18.2466C11.5227 17.961 12.1029 17.157 12.1029 16.251V14.2772C12.1029 13.6825 12.1029 13.3852 12.1523 13.1015C12.2323 12.6415 12.4081 12.2035 12.6683 11.8158C12.8287 11.5767 13.0342 11.3619 13.4454 10.9322L17.8401 6.33901C18.1567 6.00813 18.3334 5.56785 18.3334 5.10991C18.3334 4.12802 17.5374 3.33203 16.5555 3.33203Z"
                stroke="black"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>
            <select
              id="orderBy"
              className="h-12 border w-[210px] border-gray-300 text-gray-900 pl-11 text-base font-normal leading-7 rounded-full block  py-2.5 px-4 appearance-none relative focus:outline-none bg-white transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 focus-within:bg-gray-50"
            >
              {" "}
              <option selected>Sort by</option>
              <option value="option 1">popular</option>
              <option value="option 1">price</option>
              <option value="option 1">rating</option>
              <option value="option 1">date</option>
            </select>
            {/* icons */}
            <svg
              className="absolute top-1/2 -translate-y-1/2 right-4 z-10"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                stroke="#111827"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* line */}
        <svg
          className="my-7 w-full px-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          width="1216"
          height="2"
          viewBox="0 0 1216 2"
          fill="none"
        >
          <path d="M0 1H1216" stroke="#E5E7EB" />
        </svg>

        <div className="grid grid-cols-12">
          {/* my  filter */}
          <div className="col-span-12 lg:col-span-3 w-full max-lg:max-w-md max-lg:mx-auto lg:sticky lg:top-0">
            <div className="box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
              <h6 className="font-semibold  leading-7 text-gray-600 mb-5">
                Search by price
              </h6>
              <div className="flex items-center mb-5 gap-1">
                <div className="relative w-full">
                  <select
                    id="FROM"
                    className="h-12 border-2 border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                  >
                    <option selected>Min</option>
                    <option value="option 1">100$</option>
                    <option value="option 2">200$</option>
                    <option value="option 3">300$</option>
                    <option value="option 4">400$</option>
                  </select>
                  <svg
                    className="absolute top-1/2 -translate-y-1/2 right-4 z-10"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                      stroke="#111827"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="px-1 font-normal text-sm leading-6 text-gray-600">
                  to
                </p>
                <div className="relative w-full">
                  <select
                    id="FROM"
                    className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white max-h-40 overflow-auto"
                  >
                    <option selected>Max</option>
                    <option value="option 1">100$</option>
                    <option value="option 2">200$</option>
                    <option value="option 3">300$</option>
                    <option value="option 4">400$</option>
                  </select>
                  <svg
                    className="absolute top-1/2 -translate-y-1/2 right-4 z-10"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                      stroke="#111827"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <h6 className="font-semibold  leading-7 text-gray-600 mb-5">
                Search by destinations
              </h6>
              <div className="relative w-full mb-8">
                <select
                  id="FROM"
                  className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                >
                  <option selected>your destinations</option>
                  <option value="option 2">Taj Mahal</option>
                  <option value="option 3">Boat</option>
                  <option value="option 4">Imat 4</option>
                </select>
                <svg
                  className="absolute top-1/2 -translate-y-1/2 right-4 z-10"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                    stroke="#111827"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <h6 className="font-semibold  leading-7 text-gray-600 mb-5">
                Search by person
              </h6>
              <div className="relative w-full mb-8">
                <select
                  id="FROM"
                  className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white max-h-40 overflow-auto"
                >
                  <option selected>number person</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>

                <svg
                  className="absolute top-1/2 -translate-y-1/2 right-4 z-10"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                    stroke="#111827"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <h6 className="font-semibold  leading-7 text-gray-600 mb-5">
                Search by healthy
              </h6>
              <div className="relative w-full mb-8">
                <select
                  id="FROM"
                  className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white max-h-40 overflow-auto"
                >
                  <option selected>number person</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>

                <svg
                  className="absolute top-1/2 -translate-y-1/2 right-4 z-10"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                    stroke="#111827"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <button className="w-full py-3 flex items-center justify-center gap-2 rounded-full bg-[#008EC4] text-white font-semibold  shadow-sm shadow-transparent transition-all duration-500 hover:bg-blue-500 hover:shadow-indigo-200  ">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4987 13.9997L13.1654 12.6663M13.832 7.33301C13.832 10.6467 11.1457 13.333 7.83203 13.333C4.51832 13.333 1.83203 10.6467 1.83203 7.33301C1.83203 4.0193 4.51832 1.33301 7.83203 1.33301C11.1457 1.33301 13.832 4.0193 13.832 7.33301Z"
                    stroke="white"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
          {/* card */}

          <div className="col-span-12 md:col-span-9">
            <div className=" px-10 py-[2px]">
              <section data-aos="fade-up" className="container">
                <h1 className="my-8 border-l-8 border-[#008EC4] py-2 pl-2 text-3xl font-bold">
                  All Destinations
                </h1>
                <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {PlacesData.map((item) => (
                    <div key={item.title}>
                      <AllPlacesCard {...item} />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllPlaces;
