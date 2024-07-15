import { BrowserRouter, Routes , Route } from "react-router-dom";
import './App.css'
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
