import './Modal.scss';

const Modal = ({active, setActive}) => {
   return (
      <div className={ active ? 'modal active' : 'modal'} onClick={() => setActive(false)} > 
         <div className='modal__inner' onClick={e => e.stopPropagation()}>
            <div className="modal__header">GET IN TOUCH</div>
            <form>  
               <input type="text" placeholder="Name"/> 
               <input type="text" placeholder="E-mail or phone number"/> 
               <textarea placeholder="Your message"/> 
               <button>SEND MESSAGE</button>
            </form>
         </div>         
      </div>
   )
}

export default Modal;