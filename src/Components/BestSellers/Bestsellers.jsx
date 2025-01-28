import { useEffect, useState } from "react";
import axios from "axios";
import BestSellersItem from "./BestSellersItem/BestSellersItem";
import "./BestSellers.css";

const BestSellers = ({ productsInCart, setProductsInCart }) => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
            })
    }, []);

    return (
        <div className="BestSellers">
            {products.map((product) => (
                <BestSellersItem
                    product={product}
                    key={product.id}
                    setProductsInCart={setProductsInCart}
                    productsInCart={productsInCart}
                />
            ))}
        </div>
    );
}

export default BestSellers;