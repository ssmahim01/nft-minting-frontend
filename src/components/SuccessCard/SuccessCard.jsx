import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { IoMdShare } from "react-icons/io";
import { Link } from "react-router-dom";

const SuccessForm = ({setMinted}) => {
  return (
    <div className="bg-base-100/80 border border-green-600 shrink-0 shadow-md rounded-xl">
      <div className="py-2 flex flex-col gap-2 justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="240"
          height="240"
          viewBox="0 0 48 48"
        >
          <path
            fill="#4caf50"
            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
          ></path>
          <path
            fill="#ccff90"
            d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"
          ></path>
        </svg>

        <h2 className="text-2xl text-green-600 font-bold">
          NFT Minted Successfully!
        </h2>
        <p className="text-gray-600 font-medium">
          Your NFT has been created and added to your collection
        </p>
      </div>

      {/* Inside of card body */}
      <div className="card bg-gray-400 w-full shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
      </div>
      <div className="flex gap-4 justify-between items-center">
        <button className="btn btn-ghost bg-gray-800 text-white p-6 rounded-md font-bold w-1/2 shadow-lg transition-all duration-300 hover:scale-105">
          <Link to="/" className="flex gap-2 items-center">
            <IoMdShare className="text-white rounded-full text-xl" />
            <span className="text-base">Share</span>
          </Link>
        </button>

        <button onClick={() => setMinted(false)} className="btn bg-gradient-to-r from-purple-600 to-pink-500 text-white w-1/2 rounded-lg p-6 font-semibold shadow-lg transition-all duration-300 hover:scale-105">
          <HiMiniSquare3Stack3D className="text-xl" />{" "}
          <span className="text-lg">Mint Another</span>
        </button>
      </div>
    </div>
  );
};

export default SuccessForm;
