import './index.css'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FilmDetails } from './pages/FilmDetails'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/filme/:id' element={<FilmDetails />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App