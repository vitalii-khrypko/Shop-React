import {createBrowserRouter} from "react-router-dom";
import BestSellers from "../Components/BestSellers/Bestsellers";
import Product from "../Components/Product/Product";
import Cart from "../Components/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BestSellers />,
    },
    {
        path: "/product/:productId",
        element: <Product />
    },
    {
        path: "/cart",
        element: <Cart/>
    }
])

export default router;