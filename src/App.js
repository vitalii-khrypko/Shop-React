import './App.css';
import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import BestSellers from './Components/BestSellers/Bestsellers';
import Cart from './Components/Cart/Cart';
import Product from './Components/Product/Product';

function App() {
    const [productsInCart, setProductsInCart] = useState([]);

    return (
        <Router basename="/Shop-React">
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<BestSellers productsInCart={productsInCart} setProductsInCart={setProductsInCart} />} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path="/cart" element={<Cart productsInCart={productsInCart} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;