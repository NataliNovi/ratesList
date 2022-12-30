
import CardStyled from './components/card.jsx';
import styled from 'styled-components';
import style from './App.module.css';


/*const cards = [
  {limit: "Безлимитный 300", price: "300 руб/мес", speed: "До 10 Мбит/сек", trafic: "Объем включенного трафика не ограничен", background: "green"},
  {limit: "Безлимитный 450", price: "450 руб/мес", speed: "До 50 Мбит/сек", trafic: "Объем включенного трафика не ограничен"},
  {limit: "Безлимитный 550", price: "550 руб/мес", speed: "До 100 Мбит/сек", trafic: "Объем включенного трафика не ограничен"},
  {limit: "Безлимитный 1000", price: "1000 руб/мес", speed: "До 200 Мбит/сек", trafic: "Объем включенного трафика не ограничен", background: 'red'},
    ];*/
  
    function App() {

      const CardStyled = styled.div`
      background: ${props => props.background};
      height: ${props => props.height};
      border-radius: 10px;
      margin: 0.5rem 0.1rem;
      width: 50vw;
      display: flex;
      flex-direction:column;
     justify-content: flex-end;
     box-shadow: ${props => props.boxshadow};

      
      `;

    return (
      
<div className={style.App}>

<CardStyled background={'#1aabe9'} height={(400||4)+'px'}><div className={style.limit300}>Безлимитный 300</div>
<div> <a className={style.price300}>&nbsp; &nbsp; &nbsp; руб</a> <a className={style.number300}>300</a> <a className={style.month300}>/мес&nbsp; &nbsp; &nbsp;     </a> </div>
<div className={style.speed300}>До 10 Мбит/сек</div>
<div className={style.trafic}>Объем включенного трафика не ограничен</div>
</CardStyled>

<CardStyled background={'#30bc78;'} height={(400||4)+'px'}><div className={style.limit300}>Безлимитный 450</div>
<div> <a className={style.price450}>&nbsp; &nbsp; &nbsp; руб</a> <a className={style.number450}>450</a> <a className={style.month450}>/мес&nbsp; &nbsp; &nbsp;     </a> </div>
<div className={style.speed450}>До 50 Мбит/сек</div>
<div className={style.trafic}>Объем включенного трафика не ограничен</div></CardStyled>

<CardStyled background={'rgb(222, 57, 57)'} height={(440||4)+'px'}boxshadow={'-5px 5px 5px rgb(107, 102, 102)'}><div className={style.limit300}>Безлимитный 550<br></br><br></br></div>
<div> <a className={style.price550}>&nbsp; &nbsp; &nbsp; руб</a> <a className={style.number550}>550</a> <a className={style.month550}>/мес&nbsp; &nbsp; &nbsp;     </a> </div>
<div className={style.speed450}>До 100 Мбит/сек</div>
<div className={style.trafic}>Объем включенного трафика не ограничен</div></CardStyled>
<CardStyled background={'rgb(49, 47, 47);'} height={(400||4)+'px'}><div className={style.limit300}>Безлимитный 1000</div>
<div> <a className={style.price1000}>&nbsp; &nbsp; &nbsp; руб</a> <a className={style.number1000}>1000</a> <a className={style.month1000}>/мес&nbsp; &nbsp; &nbsp;     </a> </div>
<div className={style.speed1000}>До 200 Мбит/сек</div>
<div className={style.trafic}>Объем включенного трафика не ограничен</div></CardStyled>
   
 </div>
    );
  }
  
  export default App;


  /*
      const CardStyled = styled.div`
      background: ${props => props.background};
      height: ${props => props.height};
      border-radius: 3px;
      padding: 0.5rem 0;
      margin: 0.5rem 1rem;
      width: 11rem;
      color: black;
      border: 2px solid gray;
      font-size: large;
      `;
  */

/* function App() {

  return (
    <div className={styles.App}>
<CardStyled background={'blue'} height={(200||4)+'px'}></CardStyled>
<CardStyled background={'green'} height={(200||4)+'px'}></CardStyled>
<CardStyled background={'red'} height={(250||4)+'px'}></CardStyled>
<CardStyled background={'black'} height={(200||4)+'px'}></CardStyled>
   </div>
  );
}

export default App;*/


/*<CardStyled text={"Привет всем!"} background={'blue'} height={(200||4)+'px'}></CardStyled>

<CardStyled background={'green'} height={(200||4)+'px'} text={"PRIVET"} ></CardStyled>

<CardStyled background={'red'} height={(250||4)+'px'} limit={cards.limit} price={cards.price} speed = {cards.speed} trafic = {cards.trafic}></CardStyled>

<CardStyled background={'black'} height={(200||4)+'px'} limit={cards.limit} price={cards.price} speed = {cards.speed} trafic = {cards.trafic}></CardStyled>*/

