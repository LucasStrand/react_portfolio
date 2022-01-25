import './introduction.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Introduction({ menuOpen, setMenuOpen }) {
  return (
      <div className='introduction' id="introduction">
        <div className="left">
          <div className={'imageContainer ' + (menuOpen && 'active')}>
            <img src="assets/covidGrammer.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hello there, I'm</h2>
            <h1>Lucas Strand</h1>
            <h3>Student <span>Developer</span></h3>
          </div>
          <a href="#portfolio">
            <img src="assets/thiccerDown.png" alt="" />
          </a>
        </div>
      </div>
  )
}
