import './App.css';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Promo from './Containers/Promo';
import Home from './Pages/Home';
import Register from '../src/Pages/Register';
import Login from '../src/Pages/Login';
import ProductList from './Containers/ProductList';
import Subscription from '../src/Containers/Subscription';
import Footer from '../src/Containers/Footer';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';



function App() {
  return (
    
<Router>

<Routes>

<Route exact path="/home" element={<Home/>}/>

<Route exact path="/login" element={<Login/>}/>

<Route exact path="/register" element={<Register/>}/>

<Route exact path="/cart" element={<Cart/>}/>

<Route exact path="/product" element={<ProductPage/>}/>

</Routes>

</Router>
  
  );
}

export default App;
