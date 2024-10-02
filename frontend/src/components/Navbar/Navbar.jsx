import { Link } from "react-router-dom";
import { imgproS, logo } from "../../assets";
import { useState } from "react";
import {useStateContext} from '../../Context/ContextProvider'

const Navbar = () => {
  // State to manage the menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);


  // context
  const {user, token, setUser, setToken, notification} = useStateContext();
  //onlogout
  const onLogout =( ev) => {
  console.log('log out')
  }

  // Function to handle menu toggle
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle profile dropdown toggle
  const handleProfileToggle = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  return (
    <header className="right-0 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] sticky top-0 py-3 px-4 sm:px-10 bg-white z-50 min-h-[70px]">
      <div className="flex flex-wrap items-center gap-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-[200px]" />
        </Link>

        {/* Menu */}
        <div
          id="collapseMenu"
          className={`lg:ml-10 ${
            isMenuOpen ? "block" : "hidden"
          } lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          {/* Button to close the menu */}
          <button
            id="toggleClose"
            onClick={handleClick}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          {/* List of links */}
          <ul className="lg:ml-12 lg:flex gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <Link to="/">
                <img src={logo} alt="logo" className="w-36" />
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to="/"
                className="hover:text-[#008EC4] text-[#008EC4] block font-semibold transition-all"
              >
                Home
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to="/AllBloges"
                className="hover:text-[#008EC4] block font-semibold transition-all"
              >
                Bloges
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to="/AllPlaces"
                className="hover:text-[#008EC4] block font-semibold transition-all"
              >
                Destinations
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to="/About"
                className="hover:text-[#008EC4] block font-semibold transition-all"
              >
                About
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="#Contact"
                className="hover:text-[#008EC4] block font-semibold transition-all"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Login and Sign Up buttons */}
        <div className="flex items-center ml-auto">
          {token ? (
            <div className="relative font-[sans-serif] w-max mx-auto">
              <button
                type="button"
                onClick={handleProfileToggle}
                className="px-4 py-2 flex items-center rounded-full text-[#333] text-sm border border-gray-300 outline-none hover:bg-gray-100"
              >
                <img
                  src={imgproS}
                  className="w-7 h-7 mr-3 rounded-full shrink-0"
                ></img>
                {user.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-gray-400 inline ml-3"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd"
                    data-original="#000000"
                  />
                </svg>
              </button>
              {isProfileDropdownOpen && (
                <ul className="absolute shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto">
                  <Link to="/Profile">
                    <li className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 h-4 mr-3"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                          data-original="#000000"
                        ></path>
                      </svg>
                      View profile
                    </li>
                  </Link>
                  <li
                  onClick={onLogout}
                  className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-4 h-4 mr-3"
                      viewBox="0 0 6.35 6.35"
                    >
                      <path
                        d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                        data-original="#000000"
                      ></path>
                    </svg>
                    Logout
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <>
              <Link to="/SignIn">
                <button className="mr-6  border-gray-200  hover:text-white  transition-all  hover:bg-[#008EC4]  border-2  text-black   rounded-full  font-semibold  px-5 py-2.5  ">
                  Login
                </button>
              </Link>

              <Link to="/SignUp">
                <button className="bg-[#008EC4] hover:bg-[#008EC4] transition-all text-white rounded-full px-5 py-2.5">
                  Sign up
                </button>
              </Link>
            </>
          )}
          {/* Button to open the menu */}
          <button id="toggleOpen" onClick={handleClick} className="lg:hidden">
            <svg
              className="w-7 h-7"
              fill="#333"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
