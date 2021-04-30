import { useState } from 'react'

const Carousel = () => {
  const [step, setStep] = useState(0)
  const itemWidth = 100
  const itemsCount = 3

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
          <div className="carousel-item">
            <h2>Slide #1</h2>
          </div>
          <div className="carousel-item">
            <h2>Slide #2</h2>
          </div>
          <div className="carousel-item">
            <h2>Slide #3</h2>
          </div>
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={ handlePrevClick } disabled={ step === 0 && true }>Prev</button>
        <button onClick={ handleNextClick } disabled={ step === (itemsCount - 1) * -100 }>Next</button>
      </div>
    </div>
  )
}

export default Carousel