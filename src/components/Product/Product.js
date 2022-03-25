import React from 'react';
import './product.css';

const Product = (props) => {
    const {name, price, seller, img, ratings} = props.product;
    return (
        <div>
            <img src={img} className='product-img' alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Product;