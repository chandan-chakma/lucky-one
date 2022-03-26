import React from 'react';
import './SelectedItem.css'

const SelectedItem = (props) => {
    const { picture, name } = props;
    return (

        <div className='selected-item'>
            <div className='image'>
                <img src={picture} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
            </div>

        </div>





    );
};

export default SelectedItem;