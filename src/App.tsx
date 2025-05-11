import Navbar from './components/Navbar';
import './App.css'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (

    <div>
      
      <div> <Navbar /> </div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}
export default App;
 