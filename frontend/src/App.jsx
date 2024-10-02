import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import CustomTravel from "./pages/CustomTravel/CustomTravel";
import About from "./pages/About/About";
import AllBloges from "./pages/AllBloges/AllBloges";
import AllPlaces from "./pages/AllPlaces/AllPlaces";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/EditProfile";
import ProfileLayout from "./pages/Profile/ProfileLayout"; // Import the layout component
import Bookings from "./pages/Profile/Bookings";


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const token = true;
  return (
    <>
      <div className="max-w-[1920px] mx-auto">
        {/* <DetailsPlace/> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/AllBloges" element={<AllBloges />} />
          <Route path="/AllPlaces" element={<AllPlaces />} />
          <Route path="/CustomTravel" element={<CustomTravel />} />

          {/* If token exists, redirect to home page */}
          <Route
            path="/SignUp"
            element={token ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/SignIn"
            element={token ? <Navigate to="/" /> : <SignIn />}
          />

          <Route path="/Profile" element={token?<ProfileLayout />:<Navigate to="/" />}>
            <Route index element={<Profile />} />
            <Route path="Edit" element={<EditProfile />} />
            <Route path="Booking" element={<Bookings />} />
          </Route>



        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
