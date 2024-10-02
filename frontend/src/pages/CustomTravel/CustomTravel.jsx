const CustomTravel = () => {
  return (
    <div className="font-[sans-serif] pb-10 text-[#333]">
      <div className="text-center bg-gradient-to-r from-[#008EC4] px-[60px] to-blue-400 min-h-[160px] sm:p-6 p-4">
        <h4 className="sm:text-3xl text-2xl font-bold text-white">
          Get Your Perfect Healthy Trip.
        </h4>
      </div>
      <div className="mx-4 mb-4 px-[60px] -mt-16">
        <form className="max-w-4xl mx-auto bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md">
          <div className="grid md:grid-cols-2 gap-y-7 gap-x-12">
            <div>
              <label className="text-sm mb-2 block">full name</label>
              <input
                name="name"
                type="text"
                className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">email</label>
              <input
                name="email"
                type="email"
                className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">mobile no.</label>
              <input
                name="number"
                type="tel"
                className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter mobile number"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">preferred destination</label>
              <input
                name="destination"
                type="text"
                className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter destination"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">preferred travel dates</label>
              <input
                name="date"
                type="date"
                className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">duration of trip</label>
              <input
                name="duration"
                type="text"
                className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter duration"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">available budget</label>
              <input
                name="budget"
                type="number"
                className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter budget"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">details of previous health travel experience</label>
              <input
                name="details_prev_travel"
                type="text"
                className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter details of previous health travel experience"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">number of persons</label>
              <input
                name="number_per"
                type="number"
                className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter number of persons"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">any specific health conditions</label>
              <input
                name="health_condition"
                type="text"
                className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter specific health conditions"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">preferred physical activities</label>
              <input
                name="physical_activities"
                type="text"
                className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter preferred physical activities"
              />
            </div>
            <div>
              <label className="text-sm mb-2 block">dietary preferences</label>
              <input
                name="dietary"
                type="text"
                className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter dietary preferences"
              />
            </div>
          </div>
          <div className="!mt-10">
            <button
              type="submit"
              className="min-w-[150px] py-3 px-4 text-sm font-semibold rounded-md text-white bg-[#008EC4] focus:outline-none"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomTravel;
