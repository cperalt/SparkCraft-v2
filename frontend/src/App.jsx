import { BrowserRouter, Routes , Route } from "react-router-dom";
import './App.css'
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Nav from './components/Nav'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
