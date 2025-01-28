import "./BestSellersItem.css";
import { useNavigate } from "react-router-dom";

const BestSellersItem = ({ product, setProductsInCart, productsInCart }) => {
    let navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/product/${product.id}`);
    }

    const addToCartHandler = () => {
        setProductsInCart([...productsInCart, product]); // Додаємо товар у корзину
        navigate(`/cart`);
    }

    return (
        <div className="BestSellersItem">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={onClickHandler}>Show more...</button>
            <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
    );
}

export default BestSellersItem;