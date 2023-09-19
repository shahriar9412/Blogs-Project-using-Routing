import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Home'
import Contact from './Contact'
import Blogs from './Blogs'
import Error from './Error'
import Navbar from './Navbar'
import Blog from './Blog'
import User from './User'
import AddBlog from './AddBlog'
import { useState } from 'react'
import Protected from './Protected'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>

      <Navbar />
      {isLoggedIn ? <button
        onClick={() => { setIsLoggedIn(!isLoggedIn) }}>
        Log Out</button> : <button
          onClick={() => { setIsLoggedIn(!isLoggedIn) }}>Log In</button>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:title' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
        <Route path='/user' element={<User />} />
        <Route path='/add-blog' element={<Protected isLoggedIn={isLoggedIn}>
          <AddBlog />
        </Protected>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
