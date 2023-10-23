import { useState } from "react"

export default function Cart({cartListVar, removeFromState, totalPrice}) {

    
    return (
        <>
        <div>
            <h2>Subtotal: {totalPrice}</h2>
            <ul>
                {cartListVar.map((cartItem) => (
                    <div key = {cartItem.id} className="cardListing">
                    <button onClick = {() => removeFromState(cartItem)}>X</button>
                    <img src={cartItem.image} alt="" />
                    <h3>{cartItem.title}</h3>
                    <h4>{cartItem.quantity}</h4>
                    <p>${cartItem.price * cartItem.quantity}</p>
                </div>
                ))}
            </ul>
        </div>
        </>
    )
}