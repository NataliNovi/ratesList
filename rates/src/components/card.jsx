import styles from './card.module.css';
//import styled from 'styled-components';


function CardStyled (props) {
    //const {limit, price, speed, trafic}=props;
    //console.log(props);


    return (
        <div>
            <div className={styles.limit}>{props.limit}</div>
            <div className={styles.price}>{props.price}</div>
            <div className={styles.speed}>{props.speed}</div>
            <div className={styles.trafic}>{props.trafic}</div>
        </div>
    );
}
export default CardStyled;

