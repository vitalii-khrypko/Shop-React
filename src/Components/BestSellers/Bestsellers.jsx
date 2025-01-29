import { useEffect, useState } from "react";
import axios from "axios";
import BestSellersItem from "./BestSellersItem/BestSellersItem";
import "./BestSellers.css";

const BestSellers = ({ productsInCart, setProductsInCart, productsInFavourites, setProductsInFavourites}) => {
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

                    //add products to Cart
                    setProductsInCart={setProductsInCart}
                    productsInCart={productsInCart}

                    //add products to Favourites
                    productsInFavourites={productsInFavourites}
                    setProductsInFavourites={setProductsInFavourites}
                />
            ))}
        </div>
    );
}

export default BestSellers;