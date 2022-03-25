import React from 'react';
import './product.css';

const Product = (props) => {
    const { name, price, seller, img, ratings } = props.product;

    const handleAddToCart = () => {
        console.log('clicked');
    }
    return (
        <div className='product-card'>
            <img src={img} className='product-img' alt="" />

            <div className="product-info">
                <h2 className='product-name'>{name}</h2>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={handleAddToCart} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;