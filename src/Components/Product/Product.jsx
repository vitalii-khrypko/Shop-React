import "./Product.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Product = () => {
    const [product, setProduct] = useState({});
    let {productId} = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => setProduct(res.data))
    }, [productId]);

    let navigate = useNavigate();

    const addToCartHandler = () => {
        navigate(`/cart`);
    }

        return (
        <div className="Product">
            <img src={product.image} alt={product.title} />
            <div className="ProductDetails">
                <h1>{product.title}</h1>
                <h2>Price: ${product.price}</h2>
                <h2>Category: {product.category}</h2>
                <p>{product.description}</p>
                <button onClick={addToCartHandler}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;