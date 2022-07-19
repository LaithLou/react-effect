import React from "react";

/** Display a card
 * 
 * Props:
 * - card: {card}
 * 
 * Deck -> Card
 */

// get single card
// get card.image
// render img
function Card({ card }) {

    return (
        <img src={card.cards.image} alt={card.cards.value}></img>
    )
}

export default Card;