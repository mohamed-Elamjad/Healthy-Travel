import { useState } from "react";
import { mainvideo3, mainvideo2 } from "../../assets";
import Hero from "../Hero/Hero";

const Header = () => {
  const [videoSource, setVideoSource] = useState(mainvideo3); // Default video source
  const [isMainVideo, setIsMainVideo] = useState(true); // Flag to track current video
  const [videoKey, setVideoKey] = useState(0); // Key to force video element to re-render

  // Function to handle clicking on the button to toggle between videos
  const handlePointClick = () => {
    if (isMainVideo) {
      setVideoSource(mainvideo2);
    } else {
      setVideoSource(mainvideo3);
    }
    setIsMainVideo((prevIsMainVideo) => !prevIsMainVideo); // Toggle the flag
    setVideoKey((prevKey) => prevKey + 1); // Update the key to force video element to re-render
  };

  return (
    <div className="h-[700px] relative">
      <video
        key={videoKey} // Key to force video element to re-render when source changes
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
      >
        <source src={videoSource} type="video/mp4" />{" "}
        {/* Use state variable for video source */}
      </video>
      <Hero  handlePointClick={handlePointClick}/> {/* Pass handlePointClick function as prop */}
    </div>
  );
};

export default Header;
