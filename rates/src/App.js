
import CardStyled from './components/card.jsx';
import React, {useState} from 'react';
import './App.css';
//const { v4: uuidv4 } = require('uuid');
import {v4 as uuidv4} from 'uuid';


    function App() {
      const cardsArr = [
        {
          id: uuidv4(),
          limit: "No limit",
          price: "300",
          speed: "10 m/s",
          trafic: "No limit",
          color: '_1',
          isActive: false
        },
        {
          id: uuidv4(),
          limit: "No limit",
          price: "400",
          speed: "20 m/s",
          trafic: "No limit",
          color: '_2',
          isActive: false
        },
        {
          id: uuidv4(),
          limit: "No limit",
          price: "500",
          speed: "30 m/s",
          trafic: "No limit",
          color: '_3',
          isActive: false
        },
        {
          id: uuidv4(),
          limit: "No limit",
          price: "600",
          speed: "40 m/s",
          trafic: "No limit",
          color: '_4',
          isActive: false
        },
      ];

      const [cards, setCards] = useState(cardsArr);

      const handleClick = (id) => {
       // console.log(id);

        cards.forEach(el => {
          if(el.isActive){
            el.isActive=false
          }
          if(el.id === id) {
            el.isActive = true;
          }
          setCards([...cards])
      })

/*setTimeout(() => {
  console.log(cards)
}, 1000)*/

      }
        
    return (
      
<div className={'App'}>
  {
    cards.map(el => {
      return <CardStyled key = {el.id} id={el.id} limit={el.limit} price={el.price} speed = {el.speed} trafic = {el.trafic} isActive={el.isActive} color={el.color} handleClick={handleClick}/>
     
    })}


</div>
    );
  }
    

    export default App;


    
  