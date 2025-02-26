import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
    return (
        <div>
            {/* Navbar component */}
            <Navbar />

            {/* Child components of layout */}
            <Outlet />
        </div>
    );
};

export default Layout;