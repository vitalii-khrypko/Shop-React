import './App.css';
import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import BestSellers from './Components/BestSellers/Bestsellers';
import Cart from './Components/Cart/Cart';
import Product from './Components/Product/Product';
import Favourites from "./Components/Favourites/Favourites";

function App() {
    const [productsInCart, setProductsInCart] = useState([]);
    const [productsInFavourites, setProductsInFavourites] = useState([]);

    return (
        <Router basename="/Shop-React">
            <div className="App">
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route
                            path="/"
                            element={<BestSellers
                                productsInCart={productsInCart} setProductsInCart={setProductsInCart}
                                productsInFavourites={productsInFavourites} setProductsInFavourites={setProductsInFavourites}
                            />}
                        />
                        <Route
                            path="/product/:productId"
                            element={<Product productsInCart={productsInCart} setProductsInCart={setProductsInCart} />}
                        />
                        <Route
                            path="/cart"
                            element={<Cart productsInCart={productsInCart} setProductsInCart={setProductsInCart} />}
                        />
                        <Route
                            path="/favourites"
                            element={<Favourites
                                productsInCart={productsInCart} setProductsInCart={setProductsInCart}
                                productsInFavourites={productsInFavourites} setProductsInFavourites={setProductsInFavourites}
                            />}
                        />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}


export default App;