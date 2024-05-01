import './App.css'
import { Routes,Route } from "react-router-dom"
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import NewsLetterSection from './components/Home/NewsLetterSection'
import FooterSection from './components/Home/FooterSection'
import ShopProduct from './pages/ShopProduct'

function App() {

  return (
    <div>
      <Navbar/>

      <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/shop/:id' element={<ShopProduct/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>

      <NewsLetterSection/>
      <FooterSection/>
    </div>
   
  )
}

export default App





