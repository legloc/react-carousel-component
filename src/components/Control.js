const PrevIcon = () => (
  <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block">
    <path d="M15 4l-8 8 8 8"/>
  </svg>
)

const NextIcon = () => (
  <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block">
    <path d="M8 4l8 8-8 8"/>
  </svg>
)

const Control = ({ direction, onClick, disabled }) => (
  <button className="carousel-btn" onClick={ onClick } disabled={ disabled }>
    { direction === 'prev' ? <PrevIcon /> : <NextIcon /> }
  </button>
)

export default Control