import { useState } from 'react'
import Slide from './Slide'
import Control from './Control'

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

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <div className="carousel-track" style={{ transform: `translateX(${ -step * 100 }%)` }}>
          { slides.map(slide => (
            <Slide key={ slide.id } className={ step === slide.id - 1 ? 'active' : 'inactive' } title={ slide.title } desc={ slide.desc } image={ slide.image } />
          )) }
        </div>
      </div>
      <div className="carousel-controls">
        <Control direction="prev" onClick={ () => setStep(step - 1) } disabled={ step === 0 } />
        <Control direction="next" onClick={ () => setStep(step + 1) } disabled={ step === slides.length - 1 } />
      </div>
    </div>
  )
}

export default Carousel