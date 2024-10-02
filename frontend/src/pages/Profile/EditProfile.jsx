// EditProfile.js
const EditProfile = () => {
  return (
    <div>
      <div className="pt-4 px-4">
        <h1 className="py-2 text-2xl font-semibold">Edit Profile</h1>
        <p className="text-slate-600">
          Update your profile information below:
        </p>
      </div>
      <hr className="mt-4 mb-8" />

      <div className="rounded-md border bg-white">
        
        <div className="flex w-full items-center px-6 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <span> Shakir Ali</span>
        </div>
        <div className="flex flex-col space-y-3 px-4 py-6 sm:px-10">
          <label className="block" htmlFor="name">
            <p className="text-sm">Name</p>
            <input
              className="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-[#008EC4] focus:ring-1"
              type="text"
              value="Shakir Ali"
            />
          </label>
          <label className="block" htmlFor="email">
            <p className="text-sm">Email</p>
            <input
              className="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-[#008EC4] focus:ring-1"
              type="email"
              value="shakir.ali@company.com"
            />
          </label>
          <label className="block" htmlFor="team">
            <p className="text-sm">Team</p>
            <select
              className="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-[#008EC4] focus:ring-1"
              name="team"
              value="UI/UX Design"
            >
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Engineering">Engineering</option>
            </select>
          </label>
          <button className="mt-4 ml-auto rounded-lg bg-[#008EC4] px-10 py-2 text-white">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
