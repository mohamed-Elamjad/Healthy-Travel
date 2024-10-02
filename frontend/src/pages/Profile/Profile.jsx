



import { Link } from "react-router-dom";
import { imgproG } from "../../assets";

const Profile = () => {
  return (
    <div>
      <div className="pt-4 px-4">
        <h1 className="py-2 text-2xl font-semibold">Your Profile</h1>
        <p className="text-slate-600">
        Welcome to your profile! Here, you can view and manage your personal information.
        </p>
      </div>

      <hr className="mt-4 mb-8" />
      <div className="space-y-1">
        {/* Profile Card */}
        <div className="max-w-sm">
          <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
            <div className="relative mx-auto w-36 rounded-full">
              <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
              <img
                className="mx-auto h-auto w-full rounded-full"
                src={imgproG}
                alt="Profile"
              />
            </div>
            <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
              Michael Simbal
            </h1>
            <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
              <li className="flex items-center py-3 text-sm">
                <span>Name</span>
                <span className="ml-auto">Michael Simbal</span>
              </li>
              <li className="flex items-center py-3 text-sm">
                <span>Email</span>
                <span className="ml-auto">AmjadMohamed@gmail.com</span>
              </li>
              <li className="py-3">
                <Link to="/Profile/Edit">
                  <button className="mt-4 ml-auto rounded-lg bg-[#008EC4] px-10 py-2 text-white">
                    Edit Profile
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;


