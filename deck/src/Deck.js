import React, { useEffect, useState } from "react";
/**
 *
 * to make ajax req and get a deck
 * to store deck
 * want to use effect(at sm point)
 *
 * TODO: store deck id somewhere
 *
 * retrun a div w/ btn and each crad component
 * make a map to traverse over  and make each card
 *
 * card -> img as props card id as key
 *
 *
 * when getting the deck
 *
 * another for drawing each card
 *
 *  states:
 *
 *
 *
 *  map over an array that we keep addin to it
 *  as we make ajax reqs (and once remaining is
 *  0 show no more cards)
 *
 *  eith sucess or reminding
 */

function Deck() {
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState({ data: null });

  // async function getDeck() {
  //   let deck = axios.get("http://deckofcardsapi.com/api/deck/new/");
  //   return deck;
  // }

  useEffect(function fetchCardWhenMounted() {
    async function fetchCard() {
      let deck = await axios.get("http://deckofcardsapi.com/api/deck/new/");
      setDeck({
        data: deck.cards[0],
        // isLoading: false
      });
    }
    fetchCard();
  }, []);

  async function drawCard() {
    let card = await axios.get(
      `http://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
    );
    setCards((cards) => [...cards, card]);
  }
  if (Deck.data === null) return <i>Loading...</i>;

  return (
    <form>
      {cards.map((c) => (
        <Card cards={cards} />
      ))}
      <button onClick={drawCard}>draw a card!</button>
    </form>
  );
}
