import { BrowserRouter, Routes , Route } from "react-router-dom";
import './index.css'
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Nav from './components/Nav'
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("projetURL", "Token");
console.log("Supabase", supabase)
  



function App() {
      const [countries, setCountries] = useState([]);
    
    useEffect(() => {
      getCountries();
    }, []);
    
    async function getCountries() {
      // const { data } = await supabase.from("Robot");
let { data: Robot, error } = await supabase
  .from('Robot')
  .select('name')
    console.log("Robot" , Robot)
      // setCountries(data);
    // console.log(countries)
    }
  
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
      {/* {<div>
       <ul>
        {countries.map((country) => (
          <li className="text-red-500 size-36" key={country.name}>{country.name}</li>
        ))}
      </ul>       
      </div>} */}
    </BrowserRouter>
  )
}


export default App
