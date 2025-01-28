import "./Cart.css";

const Cart = ({ productsInCart, setProductsInCart}) => {
    const removeProductsFromCart = (indexToRemove) => {
        setProductsInCart(productsInCart.filter((_, index) => index !== indexToRemove));
    }
    return (
        <div className="Cart">
            <h1>Your Cart</h1>
            {productsInCart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                productsInCart.map((product, index) => (
                    <div key={index} className="CartItem">
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                        <button onClick={() => removeProductsFromCart(index)}>Remove From Cart</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;