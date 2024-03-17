import './App.css';
import NavBar from './components/Navbar/NavBar';
import Skills from './components/Skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Intro from './components/intro/intro';
import Works from './components/works/works';

function App() {
  return (
    <div className="App">
      <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
