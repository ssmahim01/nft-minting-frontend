import { Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import Home from "./pages/Home"
import NFTDetails from "./pages/NFTDetails"
import MintNFT from "./pages/MintNFT"

const App = () => {
  return (
    <>
    {/* Routes of whole application */}
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nft/:id" element={<NFTDetails />} />
        <Route path="/mint" element={<MintNFT />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
