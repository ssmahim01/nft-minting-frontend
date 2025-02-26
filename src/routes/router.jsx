import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NFTDetails from "../pages/NFTDetails";
import MintNFT from "../pages/MintNFT";
import Layout from "../layouts/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Home />},
            {path: "/nft/:id", element: <NFTDetails />},
            {path: "/mint", element: <MintNFT />},
        ]
    }
]);

export default router;