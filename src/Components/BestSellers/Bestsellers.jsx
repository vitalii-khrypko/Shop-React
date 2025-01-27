import {useEffect, useState} from "react";
import axios from "axios";
import BestSellersItem from "./BestSellersItem/BestSellersItem";
import "./BestSellers.css";

const BestSellers = () => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
            })
    }, []);

    return (
        <div className="BestSellers">
            {
                products.map((product) => <BestSellersItem product={product} key={product.id} />)
            }
        </div>
    )
}

export default BestSellers;