import { Outlet, NavLink, useLocation } from "react-router-dom";
const ProfileLayout = () => {
  const location = useLocation();
  return (
    <div className="mx-4 max-w-screen-xl px-[60px] sm:mx-8 xl:mx-auto">
      <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
      <div className="grid grid-cols-8 pt-3 pb-10 sm:grid-cols-10">
        {/* Sidebar */}
        <div className="relative my-4 w-56 sm:hidden">
          <select
            className="flex w-[180px] cursor-pointer outline-none rounded-lg border p-2 px-2 text-sm text-gray-700 border-[#008EC4]"
            value={location.pathname}
            onChange={(e) => window.location.href = e.target.value}
          >
            <option value="/Profile">Profile</option>
            <option value="/Profile/Booking">Booking</option>
          </select>
        </div>
        

        {/* Main Content Area */}
        <div className="col-span-2 hidden sm:block">
          <ul>
            <li
              className={`mt-5 cursor-pointer   px-2 py-2 font-semibold transition  hover:text-[#008EC4] ${
                location.pathname === "/Profile" ? "border-l-4 border-[#008EC4]  text-[#008EC4]" : ""
              }`}
            >
              <NavLink to="/Profile">
                Profile
              </NavLink>
            </li>
            <li
              className={`mt-5 cursor-pointer   px-2 py-2 font-semibold transition  hover:text-[#008EC4] ${
                location.pathname === "/Profile/Booking" ? "border-l-4 border-[#008EC4]   text-[#008EC4]" : ""
              }`}
            >
              <NavLink to="/Profile/Booking">
                Booking
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="col-span-8 overflow-hidden rounded-xl bg-gray-50 pb-10 sm:px-8 sm:shadow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
