import { useState } from 'react'

import SlideImage1 from '../images/Slide1.jpg'
import SlideImage2 from '../images/Slide2.jpg'
import SlideImage3 from '../images/Slide3.jpg'

const slides = [{
  id: 1,
  title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
  desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus porro amet optio rem hic possimus deleniti in iste voluptatem! Neque consequatur consequuntur, incidunt soluta quia ea blanditiis hic voluptatibus quidem.',
  image: SlideImage1
}, {
  id: 2,
  title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
  desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus porro amet optio rem hic possimus deleniti in iste voluptatem! Neque consequatur consequuntur, incidunt soluta quia ea blanditiis hic voluptatibus quidem.',
  image: SlideImage2
}, {
  id: 3,
  title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
  desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus porro amet optio rem hic possimus deleniti in iste voluptatem! Neque consequatur consequuntur, incidunt soluta quia ea blanditiis hic voluptatibus quidem.',
  image: SlideImage3
}]

const Carousel = () => {
  const [step, setStep] = useState(0)
  const itemWidth = 100
  const itemsCount = slides.length

  const handleNextClick = () => {
    setStep(step - itemWidth)
  }

  const handlePrevClick = () => {
    setStep(step + itemWidth)
  }

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <div className="carousel-track" style={{ transform: `translateX(${ step }%)` }}>
          { slides.map(slide => (
            <div key={ slide.id } className="carousel-item">
              <img className="item-img" src={ slide.image } alt="Slide#1" />
              <div className="item-content">
                <h1 className="item-title">{ slide.title }</h1>
                <p className="item-desc">{ slide.desc }</p>
                <a className="item-link" href="/">
                  <span className="link-title">Shop now</span>
                  <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block">
                    <path d="M4 12h16"/><path d="M13 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          )) }
        </div>
      </div>
      <div className="carousel-controls">
        <button
          className="carousel-btn"
          onClick={ handlePrevClick }
          disabled={ step === 0 && true }>
            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block">
              <path d="M15 4l-8 8 8 8"/>
            </svg>
          </button>
        <button
          className="carousel-btn"
          onClick={ handleNextClick }
          disabled={ step === (itemsCount - 1) * -100 }>
            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block">
              <path d="M8 4l8 8-8 8"/>
            </svg>
          </button>
      </div>
    </div>
  )
}

export default Carousel