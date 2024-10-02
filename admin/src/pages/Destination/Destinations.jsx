import Header from "../../components/Header"

const Destinations = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-gray-50 rounded-3xl">
    <Header category="Page" title="New Destination"/>

    <form className="max-w-md mx-auto space-y-4 font-[sans-serif] text-[#333] mt-4">
      <input
        name="name"
        type="text"
        placeholder="name"
        className="p-4 bg-white w-full text-sm border border-gray-300 outline-[#008EC4] rounded"
      />


<input
        name="image"
        type="file"
        placeholder="image"
        className="p-4 bg-white w-full text-sm border border-gray-300 outline-[#008EC4] rounded"
      />
      <input
        name="Location"
        type="location"
        placeholder="location"
        className="p-4 bg-white w-full text-sm border border-gray-300 outline-[#008EC4] rounded"
      />
      <input
        name="price"
        type="number"
        placeholder="price"
        className="p-4 bg-white w-full text-sm border border-gray-300 outline-[#008EC4] rounded"
      />
      <input
        name="amenities"
        type="text"
        placeholder="amenities"
        className="p-4 bg-white w-full text-sm border border-gray-300 outline-[#008EC4] rounded"
      />


<input
        name="activities"
        type="text"
        placeholder="activities"
        className="p-4 bg-white w-full text-sm border border-gray-300 outline-[#008EC4] rounded"
      />


<input
        name="description"
        type="text"
        placeholder="description"
        className="p-4 bg-white w-full text-sm border border-gray-300 outline-[#008EC4] rounded"
      />

<div  className="flex  
 items-center  gap-10">
  <label htmlFor=""   className="text-sm ">health Conditions</label>
        <select name="" id=""  className="p-4  w-[200px] bg-white  text-sm border border-gray-300 outline-[#008EC4] rounded">
          <option value="select">select</option>
        </select>
</div>

      <button
        type="submit"
        className="!mt-8 px-6 py-2.5 text-sm bg-[#008EC4] hover:bg-blue-500 text-white rounded-[8px]"
      >
        Save
      </button>
    </form>
  </div>
  )
}

export default Destinations