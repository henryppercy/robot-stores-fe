import './App.scss'
import Home from './Pages/Home';
import Products from './Pages/Products';
import Product from './Pages/Product';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App
