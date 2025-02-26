import Banner from "../components/Banner/Banner";
import MintNFT from "./MintNFT";

const Home = () => {
    return (
        <div className="bg-gradient-to-l from-gray-900 to-black">
           {/* Banner component */}
           <Banner />

           {/* Form of Mint NFT */}
           <MintNFT />
        </div>
    );
};

export default Home;