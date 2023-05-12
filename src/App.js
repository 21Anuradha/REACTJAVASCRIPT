import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Headers';
import Home from './components/Home';
import Login from './components/Login';
import Errror from './components/Errror';
import {Routes,Route, } from "react-router-dom"
import Info from './components/Checkout';
import Check from './components/check';
import Cart from './components/Cart';

function App() {

  return (
  <>
    <Headers />
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Errror />} />
      <Route path='/info' element={<Info />}/>
      <Route path='/check' element={<Check/>}/>
      <Route path='/cart' elememnt={<Cart />}/>
      
    </Routes>
  
    
  </>
  );
}

export default App;