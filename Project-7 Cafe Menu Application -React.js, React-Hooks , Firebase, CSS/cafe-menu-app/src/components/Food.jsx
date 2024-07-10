import React from 'react';
import '../styles/Food.css';

const Food = ({ id, title, category, price, img, desc }) => {
    return (
        <div className='Food'>
            <div className='img'>
                <img src={img} />
            </div>
            <div className='info'>
                <div className='header'>
                    <div className='name'>
                        <h4>{title}</h4>
                    </div>
                    <div className='price'>
                        <h4>{price}</h4>
                    </div>
                </div>
                <div className='desc'>
                    <p>{desc}</p>
                </div>
            </div>

        </div>
    );
}

export default Food;