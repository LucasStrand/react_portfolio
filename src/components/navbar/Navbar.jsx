import './navbar.scss'
import {Person, Mail} from '@material-ui/icons'

export default function Navbar() {
  return (
      <div className='navbar'>
          <div className="wrapper">
              <div className="left">
                  <a href="#introduction" className='logo'>strand.</a>
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
                  
              </div>
          </div>
      </div>
  )
}