import React from 'react';
import Styles from '../Styles/DishCard.module.css';

const DishCard = ({ recepie }) => {
    const openRecipeLink = (event) => {
        event.preventDefault(); // Prevent default behavior of anchor tag
        window.open(recepie.url, '_blank');
    };
    return (
        <div className={Styles.Card} onClick={openRecipeLink}>
            <div className={Styles.imgContainer}>
                <img src={recepie.image} alt='food img' />
            </div>
            <div className={Styles.CardInfo}>
                <p>{recepie.calories} </p>
                <p>{recepie.dishType}</p>
                <p>{recepie.label}</p>
            </div>
        </div>
    );
}

export default DishCard;