import React from 'react';
import Styles from '../Styles/Dishes.module.css';
import DishCard from './DishCard';

const Dishes = ({ recepieData }) => {
    return (
        <div className={Styles.DishesContainer} >
            <div className={Styles.Dishes}>
                {recepieData.hits.map((recepie, index) => (
                    <DishCard key={index} recepie={recepie.recipe} />
                ))}
            </div>
        </div>
    );
}

export default Dishes;