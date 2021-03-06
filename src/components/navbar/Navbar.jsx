import './navbar.scss'
import {Person, Mail} from '@material-ui/icons'

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
      <div className={'navbar ' + (menuOpen && 'active')}>
          <div className="wrapper">
              <div className="left">
                  <a href="#introduction" className='logo'>Strand</a>
                  <div className="itemContainer">
                      <Person className='icon' />
                      <span>+46739906160</span>
                  </div>
                  <div className="itemContainer">
                      <Mail className='icon'/>
                      <span>lucas.strand@outlook.com</span>
                  </div>
              </div>
              <div className="right">
                  <div className="burgir" onClick={()=>setMenuOpen(!menuOpen)}>
                      <span className='line1'></span>
                      <span className='line2'></span>
                      <span className='line3'></span>
                  </div>
              </div>
          </div>
      </div>
  )
}