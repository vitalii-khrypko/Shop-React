import "./BestSellersItem.css";
import { useNavigate } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';

const BestSellersItem = ({ product, setProductsInCart, productsInCart, productsInFavourites, setProductsInFavourites}) => {
    let navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/product/${product.id}`);
    }

    const addToCartHandler = () => {
        setProductsInCart([...productsInCart, product]); // adding products to Cart
        navigate(`/cart`);
    }

    const addToFavourites = () => {
        setProductsInFavourites([...productsInFavourites, product]); // adding products to Favourites
        navigate(`/favourites`);
    }

    return (
        <div className="BestSellersItem">
            <img src={product.image} alt={product.title}/>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={onClickHandler}>Show more...</button>
            <button onClick={addToCartHandler}>Add to Cart</button>
            <FaHeart onClick={addToFavourites} className="favIcon"  /> {/* іконка сердечка */}
        </div>
    );
}

export default BestSellersItem;