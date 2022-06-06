import { Carousel } from 'antd';
import 'antd/dist/antd.css';

import './MenuSlider.scss';
import {dataMenu} from '../../data';

const MenuSlider = () => {

   const slider = dataMenu.map(item => {
      return (
         <div key={item.id}>
            <div className='slider__inner'>
               <img src={item.img} alt='Пример блюда'/>
               <div className='menu-slider__about'>
                  <div className='menu-slider__title'>{item.title}</div>
                  <div className='menu-slider__text'>{item.textCarusel}</div>
                  <button className='menu-slider__button'>View menus</button>
               </div>                        
            </div>
         </div>         
      )
   });

   return (
      <div className='menu-slider'>
         <Carousel autoplay>
            {slider}
         </Carousel>
      </div>     
   )   
};
 
 export default MenuSlider;