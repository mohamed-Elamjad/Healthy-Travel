import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../Context/ContextProvider";
import { FaUserCircle } from "react-icons/fa";

import { useEffect } from "react";
const Navbar = () => {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize } =
    useStateContext();
  const handelActiveMenu = () => setActiveMenu(!activeMenu);

  //create function handleResize
  useEffect(() => {
    const handelResize = () => setScreenSize(window.innerWidth); // سيؤدي هذا إلى تسجيل عرض إطار
    window.addEventListener("resize", handelResize);
    handelResize();
    return () => window.removeEventListener("resize", handelResize);
  }, []);
  //!--- +++
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div>
      <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
        {/* menu */}
        <button
          type="button"
          onClick={handelActiveMenu}
          className="rounded-full mt-[7px]  text-[#008EC4] relative text-xl rounded-full py-2 p-2 hover:bg-gray-100"
        >
          <AiOutlineMenu />
        </button>
        <button className="rounded-full mt-[7px]   text-[#008EC4] relative text-2xl rounded-full py-2 p-2 hover:bg-gray-100">
        
            <FaUserCircle />
          
        </button>
      </div>
    </div>
  );
};

export default Navbar;
