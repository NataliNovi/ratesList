import './card.css';
import React, {useState} from 'react';
import classnames from 'classnames';


function CardStyled (props) {
    console.log(props.color)
    console.log(props.isActive)
    //const {limit, price, speed, trafic}=props;

    /*let classForCard = "card";
    classForCard += ' card' + props.color;

    if (props.isActive) {
        classForCard += '  card_active';
    }*/
    
    
   let classForCard = classnames ({
        'card' : true,
        'color': props.color,
        'isActive': props.isActive
       })

       console.log(classForCard)

    const [id, setId] = useState(props.id);

//паша рома макар паша мама папа
   
   
    return (
        <div className={classForCard} onClick={() => props.handleClick(props.id)}>
            <div className='limit'>{props.limit}</div>
            <div className='price'>{props.price}
            <div className='speed'>{props.speed}</div>
            <div className='trafic'>{props.trafic}</div>

        </div>
       </div>
    );
}
export default CardStyled;

