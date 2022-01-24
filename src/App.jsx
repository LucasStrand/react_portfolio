import Navbar from "./components/navbar/Navbar";
import Introduction from './components/introduction/Introduction';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import "./app.scss"
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Introduction />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
