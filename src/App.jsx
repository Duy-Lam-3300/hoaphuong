
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import MainLayout from './components/layout'
import Products from './pages/product'
import DetailProduct from './pages/product/DetailProduct'
import Breadcrumb from './components/layout/Breadcrumb'
import Contact from './pages/contact'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products/:id" element={<DetailProduct />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
