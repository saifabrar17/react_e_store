import React from 'react';
import './Cart.css';


const Cart = (props) => {

    const { cart } = props;

    let total = 0;
    let shipping = 0
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity  + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    let tax = ((total + shipping) * 10) / 100;
    let grand_total = total + shipping + tax;
    return (
        <div className='cart-div'>
            <div className="cart">
                <h3>Order Details:</h3>
                <p>Slected items: {quantity}</p>
                <p>Total Price: {total} </p>
                <p>Tax: {tax}</p>
                <p>Total Shipping: {shipping} </p>
                <h3>Grand Total: {grand_total}</h3>
            </div>
        </div>
    );
};

export default Cart;