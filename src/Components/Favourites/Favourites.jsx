import { useNavigate } from "react-router-dom";

const Favourites = ({ productsInFavourites, setProductsInFavourites, setProductsInCart, productsInCart }) => {
    let navigate = useNavigate();

    const addToCartHandler = (product) => {
        setProductsInCart([...productsInCart, product]); // Додаємо вибраний товар
        navigate(`/cart`);
    };

    const removeProductsFromFavourites = (indexToRemove) => {
        setProductsInFavourites(productsInFavourites.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="Favourites">
            <h1>Your Favourites</h1>
            {productsInFavourites.length === 0 ? (
                <p>You have no Favourites yet</p>
            ) : (
                productsInFavourites.map((product, index) => (
                    <div key={index} className="CartItem">
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                        <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
                        <button onClick={() => removeProductsFromFavourites(index)}>Remove From Favourites</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Favourites;
