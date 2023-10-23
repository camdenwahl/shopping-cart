import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shopping from "./components/Shopping";
import Cart from "./components/Cart";
import App from "./App";
import { useState } from "react";


export default function Router () {
    const [changeNumber, setChangeNumber] = useState(0);
    const [cartList, setCartList] = useState([]);
    const [total, setTotal] = useState(0);
    

    function handleClick(event, id, quantity, price, productObj) {
        setChangeNumber(changeNumber + parseInt(quantity));
        productObj["quantity"] = quantity;
        setCartList([...cartList, productObj]);
        setTotal(total + (quantity * price));
        

    }

    function removeFromState(cartItem){
        setCartList(prevCartList => {
            return prevCartList.filter(product => product.id != cartItem.id);
        })
        setChangeNumber(changeNumber - parseInt(cartItem.quantity));
        setTotal(total - parseInt(cartItem.quantity * cartItem.price));
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App buttonValue = {changeNumber}/>,
            children: [
                {
                    path: "/shopping",
                    element: <Shopping handleClick = {handleClick} />,
                },
                {
                    path: "/cart",
                    element: <Cart cartListVar = {cartList} removeFromState={removeFromState} totalPrice = {total}/>,
                }
            ]
        },
    ]);
    return <RouterProvider router = {router} />;
}
