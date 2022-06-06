import './App.scss';

import Header from './app/Header/Header';
import MenuCards from './app/MenuCards/MenuCards';
import MenuSlider from './app/MenuSlider/MenuSlider';
import AboutUs from './app/AboutUs/AboutUs';
import Footer from './app/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MenuSlider/>
      <MenuCards/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
