import './Footer.scss';

import {footer} from '../../data';


/* export const footer = {
   map, email, phone, fb, google, inst, twitter
}; */

const Footer = () => {
   return (
      <footer>
      
         <div className='contacts'>
            <div className='container'>
               <div className='contacts__inner'>
                  <div className='contacts__title'>Say hello</div>
                  <div className='contacts__items'>
                     <div className='contacts__item'>
                        <img alt='' src={footer.map}/>
                        <span>45-35 #B 39th St, Sunnyside, NY 11104</span>
                     </div>
                     <div className='contacts__item'>
                        <a href="mailto:contact@primeone.com"> 
                           <img alt='' src={footer.email}/>
                           <span>contact@primeone.com</span>
                        </a>                       
                     </div>
                     <div className='contacts__item'>
                        <a href="tel:+77187777777"> 
                           <img alt='' src={footer.phone}/> 
                           <span>8 (718) 777-7777</span>
                        </a>                     
                     </div>
                     <div className='contacts__item social'>
                        <img alt='' src={footer.fb}/>
                        <img alt='' src={footer.google}/>
                        <img alt='' src={footer.inst}/>
                        <img alt='' src={footer.twitter}/>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className='order'>
            <img alt='' src={footer.card}/>

            <div className='order__inner'>
               <div className="order__header">GET IN TOUCH</div>
               <form>  
                  <input type="text" placeholder="Name"/> 
                  <input type="text" placeholder="E-mail or phone number"/> 
                  <textarea placeholder="Your message"/> 
                  <button>SEND MESSAGE</button>
               </form>
            </div>
         </div>

         <div className='copyright'>
            <div className='container'>
               <div className='copyright__inner'>
                  <div className='copyright__text'>© PrimeOne Catering 2014. <span>Terms & Conditions</span></div>
                  <img alt='' src={footer.logo}/>
               </div>               
            </div>            
         </div>
      </footer>
   )
}

export default Footer;