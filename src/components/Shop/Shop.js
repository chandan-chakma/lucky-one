import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    const addToCart = (product) => {
        console.log('click')
        const newCart = [...cart, product];
        setCart(newCart);
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
                <Cart cart={cart}></Cart>


            </div>

        </div>
    );
};

export default Shop;