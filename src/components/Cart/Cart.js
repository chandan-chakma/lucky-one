import React from 'react';
import SelectedItem from '../SeletedItem/SelectedItem';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    const SelectedProduct = () => {
        console.log('click')
    }

    return (
        <div className='cart-item'>

            <p>Selected Item</p>
            <div className='cart'>
                {
                    cart.map(product => <SelectedItem
                        key={product.id}
                        picture={product.picture}
                        name={product.name}

                    ></SelectedItem>)
                }




            </div>
            <button className='btn' onClick={SelectedProduct}>Chose For Me</button>


        </div>
    );
};

export default Cart;