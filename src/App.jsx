import Navbar from "./components/navbar/Navbar";
import Introduction from './components/introduction/Introduction';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import "./app.scss"


function App() {
  return (
    <div className="app">
      <Navbar />
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
