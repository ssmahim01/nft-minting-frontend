import axios from "axios";
import { useState } from "react";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import SuccessCard from "../components/SuccessCard/SuccessCard";

const MintNFT = () => {
  // State of mint or minted
  let [minted, setMinted] = useState(false);

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const NFTName = form.nftName.value;
    const Description = form.description.value;
    const ImageURL = form.imageURL.value;

    // console.log(NFTName, Description, ImageURL);

    try {
      const NFTInfo = {
        NFTName,
        Description,
        ImageURL,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/nft`,
        NFTInfo
      );
    //   console.log(response.data);

      if (response?.data?.nftId) {
        form.reset();
        setMinted(true);
      }
    } catch (error) {
      console.error(
        error?.message ||
          error?.response?.data?.message ||
          "Something went wrong!"
      );
    }
  };

  return (
    <div className="lg:w-2/5 md:w-3/4 w-11/12 mx-auto -mt-8">
      {!minted ? (
        // Initial form when is not minted
        <div className="bg-base-100/80 border border-gray-600 shrink-0 shadow-md rounded-xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="pt-0 pb-2">
            <h2 className="text-2xl font-bold">Mint Your NFT</h2>
          </div>
          <fieldset className="fieldset">
            <label className="fieldset-label">
              <span className="font-bold">NFT Name</span>
            </label>
            <input
              type="text"
              name="nftName"
              maxLength={50}
              pattern="^[A-Za-z\s]*$"
              placeholder="Enter NFT name"
              className="input w-full h-12 font-medium"
              required
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="fieldset-label">
              <span className="font-bold">Description</span>
            </label>
            <textarea
              name="description"
              maxLength={200}
              placeholder="Describe your NFT"
              className="textarea w-full h-24 font-medium"
              required
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="fieldset-label">
              <span className="font-bold">Image URL</span>
            </label>

            <input
              type="url"
              name="imageURL"
              placeholder="Enter image URL"
              className="input w-full h-12 font-medium"
              required
            />
          </fieldset>

          <div className="mt-1 w-full">
            <button className="btn bg-gradient-to-r from-purple-600 to-pink-500 text-white w-full rounded-lg p-6 font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              <HiMiniSquare3Stack3D className="text-xl" />{" "}
              <span className="text-lg">Mint NFT</span>
            </button>
          </div>
        </form>
      </div>
      ) : (
        // Success card when NFT minted and stored data to the database
        <SuccessCard setMinted={setMinted} />
      )}
    </div>
  );
};

export default MintNFT;
