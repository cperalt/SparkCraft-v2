import { BrowserRouter, Routes , Route } from "react-router-dom";
import './index.css'
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Nav from './components/Nav'
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

import { useEffect, useState } from "react";
import { supabase } from "./Supabase";


function App() {
      const [countries, setCountries] = useState([]);
    
    // useEffect(() => {
    //   getCountries();
    // }, []);
    // 
    // async function getCountries() {
    //   let { data: Robot, error } = await supabase
    //     .from('Robot')
    //     .select('*')
    // }
  
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
