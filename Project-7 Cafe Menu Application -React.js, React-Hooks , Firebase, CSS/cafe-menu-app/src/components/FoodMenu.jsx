import React from 'react';
import '../styles/FoodMenu.css';
import Food from './Food';

const FoodMenu = ({ data }) => {
    return (
        <div className='FoodMenu'>
            {data.map((food, index) => {
                return <Food key={food.id} id={food.id}
                    title={food.title}
                    category={food.category}
                    price={food.price}
                    img={food.img}
                    desc={food.desc}
                />
            })}
        </div>
    );
}

export default FoodMenu;