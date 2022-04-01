import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    return (
        <div>
            <h2>This is orders.</h2>
            <p>{products.length}</p>

            <p>cart has: {cart.length}</p>
        </div>
    );
};

export default Orders;