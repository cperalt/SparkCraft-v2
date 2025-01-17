import { useEffect, useState } from "react";
import { supabase } from "../Supabase.js";
import "./product.css"

// const images = require.context('../assets/product_imgs/', true);
// const imageList = images.keys().map(image => images(image));
// console.log(imageList)

function Product() {

    const [robots, setRobots] = useState([]);
    const [sortOn, setSortOn] = useState(false)

    useEffect(() => {
      getProducts();
    }, [sortOn]);
    
    //Wrap in use effect
    async function getProducts() {
    
        if (sortOn == false){
      let { data: products, error } = await supabase
        .from('Robot')
        .select('*')
        .order('price', { ascending: true })
        setRobots(products)
        } else {
            const { data: products, error } = await supabase
        .from('Robot')
        .select('*')
        .order('price', { ascending: false })
        setRobots(products)
        }
        
    }
    
    async function getFilteredProducts() {
        const { data: products, error } = await supabase
        .from('Robot')
        .select('*')
        .order('price', { ascending: false })
        .lt('price', 45000 )
        setRobots(products)
        
    }
    
    const handleClick = () => {
        setSortOn(!sortOn)
    }
    
    console.log(robots)
    
    return (
        <main>
            <button className="btn" onClick={handleClick}>Invert Sort</button>
            <section className="main_product_page">
                <section className="products">
                    <Card robots={robots} />
                </section>
            </section>
        </main>
    )
}

function Card({robots}) {
    return (
        <>
            {robots.map(robot => (
                <>
                <div href="" className="card_hover">
                    <div className="card">
                        <img src={`/product_imgs/${robot.name}Face.jpg`} alt={`Picture of ${robot.name}`}  className="card_img"/>
                        <section className="card-section">
                            <h3 className={`title title-${robot.color}`}>{robot.company}</h3>
                            <p className={`description ${robot.color}`}>{robot.name}</p>
                            <p className={`price ${robot.color}`}>{robot.price}</p>
                        </section>
                    </div>
                </div>
                </>
            ))}
        </>
    )
}



export default Product
