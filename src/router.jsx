import { Outlet, createBrowserRouter } from "react-router-dom";
import RootLayout from "./component/rootLayout/rootLayout";
import Homepage from "./pages/homePage/homePage";
import Trailermoredetail from "./pages/trailerMoreDetail/trailerMoreDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: ":movieId",
                element: <Trailermoredetail />
            }
        ]
    }
]);


export default router;