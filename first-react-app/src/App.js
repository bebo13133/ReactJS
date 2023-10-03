
import './App.css';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (

    <div>

      <div id="intro" className="parallax-window" data-parallax="scroll" data-image-src="img/antique-cafe-bg-01.jpg">
       <Navigation/>
      <Intro/>
      </div>
      <div id="menu" className="parallax-window" data-parallax="scroll" data-image-src="img/antique-cafe-bg-02.jpg">
      <Menu/>
      </div>
        <div id="about" className="parallax-window" data-parallax="scroll" data-image-src="img/antique-cafe-bg-03.jpg">
     <About/>
      </div>
      <div id="contact" className="parallax-window relative" data-parallax="scroll" data-image-src="img/antique-cafe-bg-04.jpg">
      <Contact/>
      </div>
    </div>
  );
}

export default App;
