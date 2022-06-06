import { useState } from 'react';

import './Header.scss';

import Modal from '../Modal/Modal';
import logo from '../../img/header/header-logo.png';


const Header = () => {
   const [activeModal, setActiveModal] = useState(false);
   const [activeMenu, setActiveMenu] = useState(false);

   return (
      <header>
         <Modal active={activeModal} setActive={setActiveModal}/>
         <div className='header'>
         <div className='container'>
               <div className='header__inner'>
                  
                  <div className={activeMenu ? 'header__burger active' : 'header__burger'} onClick={() => {setActiveMenu(!activeMenu)}}>
                     <span className='hamburger-menu'></span>
                  </div>


                  <div className={activeMenu ? 'header__menu active' : 'header__menu'}>

                     <div className='header__menu-items first'>
                        <a>GALLERY</a>
                        <a>FRIENDS</a>
                        <a>CONTACT</a>
                     </div>

                     <div className='header__logo'>
                     <img src={logo} alt='logo'/>
                     </div>

                     <div className='header__menu-items second'>
                        <a>ABOUT</a>
                        <a>MENUS</a>
                        <div onClick={() => setActiveModal(true)} className='header__modal-order'>ORDERING</div>
                     </div>  

                  </div>
                                         
               </div>                        
            </div>                    
         </div>
         
      </header>
      
   )
}

export default Header;