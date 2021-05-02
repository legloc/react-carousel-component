import { useState } from 'react'
import Slide from './Slide'
import Control from './Control'

const Carousel = ({ slides }) => {
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