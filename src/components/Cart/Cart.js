import React from 'react';
import SelectedItem from '../SeletedItem/SelectedItem';
import './Cart.css'

const Cart = (props) => {
    const { cart, SelectedProduct } = props;
    if (SelectedProduct > 4) {
        alert('you can not select more than 4')
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

            <button className='btn' onClick={() => SelectedProduct(props.product)}>Chose For Me</button>


        </div>

    );
};

export default Cart;