import Header from "../../components/Header";

const UserForm = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-gray-50 rounded-3xl">
      <Header category="Page" title="New user"/>

      <form className="max-w-md mx-auto space-y-4 font-[sans-serif] text-[#333] mt-4">
        <input
          name="name"
          type="text"
          placeholder="name"
          className="p-4 bg-white w-full text-sm border border-gray-300 outline-[#008EC4] rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          className="p-4 bg-white w-full text-sm border border-gray-300 outline-[#008EC4] rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          className="p-4 bg-white w-full text-sm border border-gray-300 outline-[#008EC4] rounded"
        />
        <input
          name="password_conf"
          type="password"
          placeholder="password confirmation"
          className="p-4 bg-white w-full text-sm border border-gray-300 outline-[#008EC4] rounded"
        />

        <button
          type="submit"
          className="!mt-8 px-6 py-2.5 text-sm bg-[#008EC4] hover:bg-blue-500 text-white rounded-[8px]"
        >
          Save
        </button>
      </form>
    </div>
  );
};
export default UserForm;
