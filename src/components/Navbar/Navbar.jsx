import { FaWallet } from "react-icons/fa";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className={
        "navbar py-2 border-b border-gray-500 bg-black fixed z-10 shadow-sm md:px-14 px-4"
      }
    >
      <div className="navbar-start">
        <Link to="/">
          <HiMiniSquare3Stack3D className="w-8 h-8" />
        </Link>
      </div>

      <div className="navbar-end w-full">
        <>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-7 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105">
            <Link to="/wallet" className="flex gap-2 items-center">
              <FaWallet className="text-white text-lg" />
              <span className="text-base">Connect Wallet</span>
            </Link>
          </button>
        </>
      </div>
    </div>
  );
};

export default Navbar;
