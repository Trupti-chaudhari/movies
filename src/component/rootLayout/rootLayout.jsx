import { Outlet } from "react-router-dom";
import Footersection from "../footerSection/footerSection";
import Moviesheader from "../moviesHeader/moviesHeader";

const RootLayout = () => (
    <>
        <Moviesheader />
        <Outlet />
        <Footersection />
    </>
);

export default RootLayout;