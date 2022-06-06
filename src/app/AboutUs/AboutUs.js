import './AboutUs.scss';

import {dataAbout} from '../../data';


const AboutUs = () => {

   const aboutItems = dataAbout.map(item => {

      if (item.id > 1) {
         return (
            <div  key={item.id} className='about__items'>
               <img src={item.img} alt=''/>
               <div className='about__description'>
                  <div className='about__title'>{item.title}</div>
                  <div className='about__text'>{item.text}</div>
               </div>                        
            </div>
         )
      }
      
   });

   return (
      <div className='about'>
         <div className='about__header'>
            <span>Why CHOOSE us?</span>
            <img alt='' src={dataAbout[0].img}/>
         </div>
         <div className='about__info'>
            <div className='container'>
               <div className='about__inner'>
                  {aboutItems}
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutUs;