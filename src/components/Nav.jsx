import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

export default function Nav({buttonValue}) {


    return (
        <>
        <div id = "navigation">
            <img src="https://static.vecteezy.com/system/resources/previews/011/898/589/original/luffy-s-straw-hat-in-one-piece-straw-hat-free-vector.jpg" alt="" />
            <ul>
                <li>
                    <Link to = "/" className = "link">Home</Link>
                </li>
                <li>
                    <Link to = "/shopping" className = "link">Shopping</Link>
                </li>
                <li>
                    <Link to = "/cart" className = "link">Cart</Link>
                </li>
                <li id = "countCart">{buttonValue}</li>
            </ul>
        </div>
        <Outlet/>
        </>
    )
}