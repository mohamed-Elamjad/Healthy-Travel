import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../Context/ContextProvider";

import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import axiosClient from "../../axios/axiosClient";

const SignUp = () => {
  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();
  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState(null);

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmation, setShowConfirmation] = useState(false); // State to toggle confirmation visibility

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };
    axiosClient.post("/signup", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };



  return (
    <div className="p-4 flex flex-wrap justify-center  py-10 px-[60px] items-center w-full h-full  font-[sans-serif]">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-sm p-6 relative">
        <div className="my-6 text-center">
          <h4 className="text-3xl text-[#333] font-extrabold">Sign Up</h4>
          <p className="text-sm text-gray-400 mt-4">Create account with us</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="relative flex items-center">
            <input
              ref={nameRef}
              type="text"
              required
              placeholder="Enter Name"
              className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#008EC4] rounded-lg"
            />
          </div>
          <div className="relative flex items-center">
            <input
              ref={emailRef}
              type="email"
              required
              placeholder="Enter Email"
              className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#008EC4] rounded-lg"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              className="w-[13px] text-gray-400 h-[18px] absolute right-4"
              viewBox="0 0 682.667 682.667"
            >
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                </clipPath>
              </defs>
              <g
                clip-path="url(#a)"
                transform="matrix(1.33 0 0 -1.33 0 682.667)"
              >
                <path
                  fill="none"
                  stroke-miterlimit="10"
                  stroke-width="40"
                  d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                  data-original="#000000"
                ></path>
                <path
                  d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                  data-original="#000000"
                ></path>
              </g>
            </svg>
          </div>
          <div className="relative flex items-center">
            <input
              ref={passwordRef}
              type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
              required
              placeholder="Enter Password"
              className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#008EC4] rounded-lg"
            />
            {/* Toggle password visibility icon */}
            {showPassword ? (
              <IoEyeOutline
                className="text-gray-400 w-[18px] h-[18px] absolute right-4 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <IoEyeOffOutline
                className="text-gray-400 w-[18px] h-[18px] absolute right-4 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          <div className="relative flex items-center">
            <input
              ref={passwordConfirmationRef}
              type={showConfirmation ? "text" : "password"} // Toggle input type based on showConfirmation state
              required
              placeholder="Confirm Password"
              className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#008EC4] rounded-lg"
            />
            {/* Toggle confirmation visibility icon */}
            {showConfirmation ? (
              <IoEyeOutline
                className="text-gray-400 w-[18px] h-[18px] absolute right-4 cursor-pointer"
                onClick={() => setShowConfirmation(false)}
              />
            ) : (
              <IoEyeOffOutline
                className="text-gray-400 w-[18px] h-[18px] absolute right-4 cursor-pointer"
                onClick={() => setShowConfirmation(true)}
              />
            )}
          </div>
          <div className="flex">
            <input type="checkbox" required className="w-4" />
            <label className="text-sm ml-4 text-[#333]">
              I have read and accept the{" "}
              <a href="#" className="text-sm text-[#008EC4] font-semibold">
                Terms and Conditions
              </a>
            </label>
          </div>
          <button className="px-6 py-3 !mt-12 w-full font-semibold bg-[#008EC4] text-white rounded-full">
            Create Account
          </button>
          <p className="text-sm text-center">Or</p>
          <button
            type="button"
            className="px-6 py-3 w-full font-semibold bg-gray-200 hover:bg-gray-300 text-[#333] rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22px"
              fill="#fff"
              className="inline mr-2"
              viewBox="0 0 512 512"
            >
              <path
                fill="#fbbd00"
                d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                data-original="#fbbd00"
              />
              <path
                fill="#0f9d58"
                d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                data-original="#0f9d58"
              />
              <path
                fill="#31aa52"
                d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                data-original="#31aa52"
              />
              <path
                fill="#3c79e6"
                d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                data-original="#3c79e6"
              />
              <path
                fill="#cf2d48"
                d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                data-original="#cf2d48"
              />
              <path
                fill="#eb4132"
                d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                data-original="#eb4132"
              />
            </svg>
            Continue with Google
          </button>
        </form>
        <hr className="my-6" />
        <p className="text-sm text-center text-[#333]">
          Already have an account?{" "}
          <Link to="/SignIn" className="text-sm text-[#008EC4]">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
