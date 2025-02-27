
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import MainLayout from './components/layout'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
