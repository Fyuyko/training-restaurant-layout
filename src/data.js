//menu
import menuImg1 from './img/menu-preview/first.jpg';
import menuImg2 from './img/menu-preview/second.jpg';
import menuImg3 from './img/menu-preview/third.jpg';
import menuImg4 from './img/menu-preview/fourth.jpg';

//about
import header from './img/about/header.jpg';
import aboutImg1 from './img/about/1.jpg';
import aboutImg2 from './img/about/2.jpg';
import aboutImg3 from './img/about/3.jpg';
import aboutImg4 from './img/about/4.jpg';

//footer
import map from './img/footer/map.png';
import email from './img/footer/email.png';
import phone from './img/footer/telephone.png';
import fb from './img/footer/facebook.png';
import google from './img/footer/google_plus.png';
import inst from './img/footer/instagram.png';
import twitter from './img/footer/twitter.png';
import card from './img/footer/card.jpg';
import logo from './img/footer/logo.png';

export const dataMenu = [

   {
      id: 1,
      img: menuImg1,
      title: 'Private catering',
      textCarusel: 'Treat your guests to a beautifully plated dinner, hand-crafted canapes or a casual BBQ.',
      textCard: 'We are able to serve events from 2 to 2000 guests and always reasonable prices.',
   },
   {
      id: 2,
      img: menuImg2,
      title: 'Corporate catering',
      textCarusel: 'Here you can spend time with colleagues, pleasant atmosphere and great food from the chef.',
      textCard: 'Fresh, seasonal and simple cuisine. Food is our business and our passion.', 
   },
   {
      id: 3,
      img: menuImg3,
      title: 'Online ordering',
      textCarusel: 'In case you do not want to leave the apartment, we will bring delicious food to your table.',
      textCard: 'We use only the best organic ingredients and gluten and dairy free cooking.',
   },
   {
      id: 4,
      img: menuImg4,
      title: 'Wedding catering',
      textCarusel: 'We invite you to hold a significant event in our restaurant, we will prepare everything according to the first category.',
      textCard: 'Successful catering is about organisation, high quality service, and great food.', 
   },

];
export const dataAbout = [

   {
      id: 1,
      img: header,
   },
   {
      id: 2,
      img: aboutImg1,
      title: 'Always fresh',
      text: 'Fresh, seasonal and simple cuisine. Food is our business and our passion.',
   },
   {
      id: 3,
      img: aboutImg2,
      title: 'Reliable AND Flawless',
      text: 'Successful catering is about organisation, high quality service, and great food.',
   },
   {
      id: 4,
      img: aboutImg3,
      title: 'Clean and Healthy',
      text: 'We use only the best organic ingredients and gluten and dairy free cooking.',
   },
   {
      id: 5,
      img: aboutImg4,
      title: 'Fits any size and budget',
      text: 'We are able to serve events from 2 to 2000 guests and always at reasonable prices.',
   },

];
export const footer = {
   map, email, phone, fb, google, inst, twitter, card, logo
};