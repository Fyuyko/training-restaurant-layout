import { Card, Button } from 'antd';

import './MenuCards.scss';
import {dataMenu} from '.././../data';

const { Meta } = Card;

const MenuCards = () => {

   let cards = dataMenu.map(item => {
      return (
         <Card
         key={item.id}
            bordered={false}
            hoverable
            style={{
               width: 240,
            }}
            cover={<img alt="Примеры блюд" src={item.img} />}
         >
            <Meta title={item.title} description={item.textCard}/>
            <Button className='menu-cards__button-quote'>Get a quote</Button>
            <button className='menu-cards__button-menu'>View menus</button>
         </Card>
      )     
   })
   
   return (
      <div className='menu-cards'>
         <div className='container'>
            <div className='menu-cards__item'>
               {cards}
            </div>            
         </div>
      </div>
   )

};

export default MenuCards;