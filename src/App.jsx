import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailRestaurant from './pages/DetailRestaurant'
import Navbar from './component/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='px-10 py-8'>
          <h1 className='text-3xl mb-4'>Restaurants</h1>
          <p className='w-1/2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque delectus, reiciendis nam ipsum vel inventore eveniet quasi dolorum facere aliquid, </p>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<DetailRestaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
