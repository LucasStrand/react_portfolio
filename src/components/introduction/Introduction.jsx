import './introduction.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Introduction({ menuOpen, setMenuOpen }) {

  const textRef = useRef();

  useEffect(()=>{
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings:['Full Stack Developer', 'Student', 'Caffeine Addict']
      })
  },[])
  return (
      <div className='introduction' id="introduction">
        <div className="left">
          <div className={'imageContainer ' + (menuOpen && 'active')}>
            <img src="assets/programmerLangs.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hello there, I'm</h2>
            <h1>Lucas Strand</h1>
            <h3>I'm a <span ref={textRef}></span></h3>
          </div>
          <a href="#portfolio">
            <img src="assets/thiccerDown.png" alt="" />
          </a>
        </div>
      </div>
  )
}
