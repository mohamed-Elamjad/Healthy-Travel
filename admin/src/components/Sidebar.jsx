import { MdOutlineCancel } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom"; // Import useLocation
import { useStateContext } from "../Context/ContextProvider";
import { assets } from "../assets/assets";
import { RiUserSettingsLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { MdAddLocationAlt } from "react-icons/md";
import { RiSaveFill } from "react-icons/ri";


const Sidebar = () => {
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 bg-gray-100 m-2";

  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const location = useLocation(); // Use useLocation to get current route

  const handelCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
      console.log("yex");
    }
  };

  const isUsersActiveUser =
    location.pathname === "/users" ||
    location.pathname === "/users/new" ||
    location.pathname === "/users/:id";

  const isUsersActiveDes =
    location.pathname === "/destinations" ||
    location.pathname === "/destinations/new" ;
  const isUsersActiveBooking=location.pathname === "/bookings" ;


  const isUsersActiveBlog=location.pathname === "/blogs";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          {/* logo and btn close menu */}
          <div className="flex justify-between items-center">
            <Link to="/" className="items-center gap-3 ml-3 mt-4 flex">
              <img src={assets.logo} alt="logo" className="w-[190px]" />
            </Link>
            <button
              type="Button"
              onClick={() => setActiveMenu(!activeMenu)}
              className="text-2xl rounded-full p-2 hover:bg-gray-100 mt-4 mr-2 text-[#008EC4]"
            >
              <MdOutlineCancel />
            </button>
          </div>

          {/* links */}
          <div className="mt-10">
            <div>
              <p className="text-gray-400  mt-4 uppercase">Dashboard</p>
              {/* ds */}
              <div>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#008EC4" : " ",
                  })}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  onClick={handelCloseSidebar}
                >
                  <RxDashboard />
                  <span>management</span>
                </NavLink>
              </div>
            </div>

            <div>
              <p className="text-gray-400  mt-4 uppercase">Pages</p>
              {/* management users */}
              <div>
                <NavLink
                  to="/users"
                  style={{
                    backgroundColor: isUsersActiveUser ? "#008EC4" : " ",
                  }}
                  className={isUsersActiveUser ? activeLink : normalLink}
                  onClick={handelCloseSidebar}
                >
                  <RiUserSettingsLine />
                  <span>users</span>
                </NavLink>
              </div>

              {/* management destinations */}
              <div>
                <NavLink
                  to="/destinations"
                  style={{
                    backgroundColor: isUsersActiveDes ? "#008EC4" : " ",
                  }}
                  className={isUsersActiveDes ? activeLink : normalLink}
                  onClick={handelCloseSidebar}
                >
                  <MdAddLocationAlt />
                  <span>destinations</span>
                </NavLink>
              </div>

              <div>
                <NavLink
                  to="/bookings"
                  style={{
                    backgroundColor: isUsersActiveBooking ? "#008EC4" : " ",
                  }}
                  className={isUsersActiveBooking ? activeLink : normalLink}
                  onClick={handelCloseSidebar}
                >
                  <RiSaveFill />
                  <span>Bookings</span>
                </NavLink>
              </div>


              
              <div>
                <NavLink
                  to="/blogs"
                  style={{
                    backgroundColor: isUsersActiveBlog ? "#008EC4" : " ",
                  }}
                  className={isUsersActiveBlog ? activeLink : normalLink}
                  onClick={handelCloseSidebar}
                >
                  <RiSaveFill />
                  <span>Blogs</span>
                </NavLink>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
