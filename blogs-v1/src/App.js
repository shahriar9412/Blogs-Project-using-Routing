import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Home'
import Contact from './Contact'
import Blogs from './Blogs'
import Error from './Error'
import Navbar from './Navbar'
import Blog from './Blog'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:title' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
