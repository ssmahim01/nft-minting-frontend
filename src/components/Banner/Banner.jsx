import { FaRocket } from "react-icons/fa";
import { RiVideoFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-[37rem]">
          {/* Heading */}
          <h1 className="md:text-5xl text-4xl font-bold">
            Discover & Collect
            <br />
            Extraordinary NFTs
          </h1>

          {/* Subheading */}
          <p className="py-8 text-gray-300">
            Enter the world of digital art and collectibles. Explore unique NFTs
            created by artists worldwide.
          </p>

          {/* Action buttons */}
          <div className="flex gap-4 justify-center items-center">
            <button className="btn bg-gradient-to-r from-purple-600 to-pink-500 text-white p-6 rounded-md font-bold shadow-lg transition-all duration-300 hover:scale-105">
              <Link to="/" className="flex gap-2 items-center">
                <FaRocket className="text-white text-base" />
                <span className="text-base">Start Creating</span>
              </Link>
            </button>

            <button className="btn btn-ghost bg-gray-800 text-white p-6 rounded-md font-bold shadow-lg transition-all duration-300 hover:scale-105">
              <Link to="/" className="flex gap-2 items-center">
                <RiVideoFill className="text-white rounded-full text-xl" />
                <span className="text-base">Watch Video</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
