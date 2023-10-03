import './App.css'

import Navbar from './containers/navbar/Navbar'
import Hero from './containers/hero/Hero'
import Product from './containers/product/product'
import About from './containers/about/About'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <About />
    </>
  )
}

export default App
