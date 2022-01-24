import './navbar.scss'

export default function Navbar() {
  return (
      <div className='navbar'>
          <div className="wrapper">
              <div className="left">
                  <a href="#introduction">Introduction</a>
                  <a href="#portfolio">Portfolio</a>
                  <a href="#works">Works</a>
                  <a href="#contact">contact</a>
              </div>
              <div className="right"></div>
          </div>
      </div>
  )
}
