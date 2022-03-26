import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    const addToCart = (product) => {
        console.log('click')
    }

    return (
        <div className='shop-container'>
            <div className='products'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}

                    ></Product>)
                }

            </div>
            <div className='cart'>
                <h2>cart short</h2>

            </div>

        </div>
    );
};

export default Shop;