import { BrowserRouter, Routes , Route } from "react-router-dom";
import './index.css'
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Nav from './components/Nav'
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App
