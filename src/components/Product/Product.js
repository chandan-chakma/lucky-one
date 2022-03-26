import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, picture, balance, } = props.product;

    console.log(props.product.name)
    return (
        <div className='product'>
            <img src={picture} alt=""></img>
            <h2>{name}</h2>
            <p>Price: {balance}</p>
            <button className='button' onClick={() => props.addToCart(props.product)}>Add TO Cart</button>
        </div>

    );
};

export default Product;