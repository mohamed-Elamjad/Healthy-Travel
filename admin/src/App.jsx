import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useStateContext } from "./Context/ContextProvider";
import Management from "./pages/Management/Management";
import ListUsers from "./pages/Users/ListUsers";
import UserForm from "./pages/Users/UserForm";
import NotFound from "./pages/NotFound/NotFound";
import ListDestinations from "./pages/Destination/ListDestinations";
import Destinations from "./pages/Destination/Destinations";
import ListBookings from "./pages/Bookings/ListBookings";
import Blogs from "./pages/Blogs/Blogs";

export default function App() {
  const { activeMenu } = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative">
          {/* btn setting */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <button
              style={{ background: "#008EC4", borderRadius: "50%" }}
              type="button"
              className="text-3xl text-white p-[10px] hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </div>
          
          {activeMenu ? (
            <div className="w-72 fixed sidebar bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}

          <div
            className={
              activeMenu
                ? " min-h-screen md:ml-72 w-full"
                : " w-full min-h-screen flex-2"
            }
          >
            <div className="fixed md:static bg-main-bg  navbar w-full">
              
              <Navbar />
            </div>

            <div>
              <Routes>
                {/* dashboard  */}
                <Route path="/"  element={<Management/>}/>
                {/* pages  */}
                <Route path="/users"  element={<ListUsers/>}/>
                <Route path="users/new"  element={<UserForm key="newUser"/>}/>
                <Route path="users/:id"  element={<UserForm key="updateUser"/>}/>



                <Route path="/destinations"  element={<ListDestinations/>}/>
                <Route path="destinations/new"  element={<Destinations key="newdestination"/>}/>

                <Route path="/bookings"  element={<ListBookings/>}/>
                <Route path="/blogs"  element={<Blogs/>}/>

   

                {/* Page Not Found */}
                <Route path="*" element={<NotFound />} />

              </Routes>

              
            </div>
            <Footer />
          </div>
        </div>
        {/* Toast container should be placed here */}
      </BrowserRouter>
    </div>
  );
}
