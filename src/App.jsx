import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
//import './App.css'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import Navbar from './Pages/Navbar'
import { WatchListprovider } from './context/WatchListcontext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WatchListprovider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
      </WatchListprovider>
    </>
  )
}

export default App
