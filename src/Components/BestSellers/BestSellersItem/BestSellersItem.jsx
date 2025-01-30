import "./BestSellersItem.css";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const BestSellersItem = ({ product, setProductsInCart, productsInCart, productsInFavourites, setProductsInFavourites }) => {
    let navigate = useNavigate();
    const [message, setMessage] = useState("");

    const onClickHandler = () => {
        navigate(`/product/${product.id}`);
    };

    const addToCartHandler = () => {
        setProductsInCart([...productsInCart, product]);
        // navigate(`/cart`);
    };

    const addToFavourites = () => {
        if (productsInFavourites.some((favProduct) => favProduct.id === product.id)) {
            setMessage("This product is already in Favourites!");
            setTimeout(() => setMessage(""), 2000); // error message disappears in 2 sec
        } else {
            setProductsInFavourites([...productsInFavourites, product]);
            // navigate(`/favourites`);
        }
    };

    return (
        <div className="BestSellersItem">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={onClickHandler}>Show more...</button>
            <button onClick={addToCartHandler}>Add to Cart</button>
            <FaHeart onClick={addToFavourites} className="favIcon" />
            {message && <p className="errorMessage">{message}</p>}
        </div>
    );
};

export default BestSellersItem;
