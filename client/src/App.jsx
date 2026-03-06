import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import MyListing from './pages/MyListing'
import ListingDetails from './pages/ListingDetails'
import ManageListing from './pages/manageListing'
import Messages from './pages/Messages'
import Myorders from './pages/myorders'
import Loading from './pages/Loading'
import Navbar from './components/Navbar'

const App = () => {

  const { pathname } = useLocation()

  return (
    <div>
      {!pathname.includes('/admin') && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/marketplace' element={<Marketplace />} />
        <Route path='/mylisting' element={<MyListing />} />
        <Route path='/listing/:listingId' element={<ListingDetails />} />
        <Route path='/create-listing' element={<ManageListing />} />
        <Route path='/edit-listing/:id' element={<ManageListing />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/myorders' element={<Myorders />} />
        <Route path='/loading' element={<Loading />} />
       
      </Routes>
    </div>
  )
}

export default App