import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import constructionImage from './assets/cosnstruction-image.png';

import Home from './Pages/home.jsx'
import About from './Pages/about.jsx'
import Contact from './Pages/contact.jsx'

function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact  />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
