import { useState } from 'react'

const Slide = ({ title, desc, image, className, onHover }) => {  
  const [isHovered, setHovered] = useState(false)
  
  const handleMouseEnter = () => {
    setHovered(true)
    onHover(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
    onHover(false)
  }

  return (
    <div className={ `carousel-item ${ className } ${ isHovered ? 'hovered' : '' }` }>
      <img className="item-img" src={ image } alt="Slide#1" />
      <div className="item-content">
        <h1 className="item-title">{ title }</h1>
        <p className="item-desc">{ desc }</p>
        <a className="item-link" href="/" onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave } >
          <span className="link-title">Shop now</span>
          <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" display="block">
            <path d="M4 12h16"/><path d="M13 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
export default Slide