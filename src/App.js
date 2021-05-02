import Carousel from './components/Carousel'
import './App.sass';

import SlideImage1 from './images/Slide1.jpg'
import SlideImage2 from './images/Slide2.jpg'
import SlideImage3 from './images/Slide3.jpg'

const slides = [{
  id: 1,
  title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
  desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus porro amet optio rem hic possimus deleniti in iste voluptatem! Neque consequatur consequuntur, incidunt soluta quia ea blanditiis hic voluptatibus quidem.',
  image: SlideImage1
}, {
  id: 2,
  title: 'Lorem ipsum dolor sit amet',
  desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus porro amet optio rem hic possimus',
  image: SlideImage2
}, {
  id: 3,
  title: 'Lorem ipsum dolor sit amet consectetur',
  desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus porro amet optio rem hic possimus deleniti in iste voluptatem!',
  image: SlideImage3
}]

const App = () => (
  <div style={{ marginTop: 100, marginBottom: 100 }}>
    <Carousel slides={ slides } />
  </div>
)

export default App