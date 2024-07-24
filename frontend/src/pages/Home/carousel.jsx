import "../../pages/product.css"

function Carousel() {
    return (
<div className="carousel rounded-box">
  <div className="carousel-item m-4">
        <Card name="Optimus" color="white" />
  </div>
  <div className="carousel-item m-4">
        <Card name="Figure-01" color="black" />
  </div>
  <div className="carousel-item m-4">
        <Card name="Phoenix" color="white" />
  </div>
  <div className="carousel-item m-4">
        <Card name="Apollo" color="black" />
  </div>
  <div className="carousel-item m-4">
        <Card name="GR-01" color="white" />
  </div>
  <div className="carousel-item m-4">
        <Card name="Atlas" color="black" />
  </div>
</div>
    )
}

function Card({name, color}) {
  return (
        <a className="card_hover">
            <div className="card">
                <img src={`/public/product_imgs/${name}Full.jpg`} alt={`Picture of ${name} robot`} className="card_img" />
                <section className="home-card-section">
                    <p className={`description ${color}`}>{name}</p>
                </section>
            </div>
        </a>
  )
}



export default Carousel
