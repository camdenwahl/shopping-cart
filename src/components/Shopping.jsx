import { useEffect, useState } from "react"

export default function Shopping ({handleClick}) {
    const [products, setProducts] = useState([]);
    const [inputValues, setInputValues] = useState({});


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
                setProducts(json);
            })
    }, []);

    function handleInputChange(productId, value) {
        setInputValues(prevValues => ({
            ...prevValues,
            [productId]: value
        }));
    }

    function handleAddToCart(event, productId, productPrice, productObj) {
        const quantity = inputValues[productId] || 0;
        handleClick(event, productId, quantity, productPrice, productObj);
    }


    return (
        <div>
            <ul id = "productList">
            {products.map((product) =>(
                <div key = {product.id} className="cardListing">
                    <img src={product.image} alt="" />
                    <h3>{product.title}</h3>
                    <input type="number" min = "1" value = {inputValues[product.id]} onChange = {(event) => handleInputChange(product.id, event.target.value)}/>
                    <p>${product.price}</p>
                    <button onClick = {(event) => handleAddToCart(event, product.id, product.price, product)}>Add to Cart</button>
                </div>
            ))}
            </ul>
        </div>
    )
}