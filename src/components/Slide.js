const Slide = ({ title, desc, image }) => (
  <div className="carousel-item">
    <img className="item-img" src={ image } alt="Slide#1" />
    <div className="item-content">
      <h1 className="item-title">{ title }</h1>
      <p className="item-desc">{ desc }</p>
      <a className="item-link" href="/">
        <span className="link-title">Shop now</span>
        <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block">
          <path d="M4 12h16"/><path d="M13 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
)

export default Slide