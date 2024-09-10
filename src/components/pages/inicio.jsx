import React from 'react'
import './inicio.css'
import Buttons from './buttons'
const inicio = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/01.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h2>Computer And Laptop Accesopries</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi iusto, fugiat beatae architecto error itaque maxime? Architecto,
             quae repellat itaque, quia non temporibus adipisci consequuntur perspiciatis veniam, rem iusto vel!  </p>
             <Buttons></Buttons>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./images/02.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5>Computer And Laptop Accesopries</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi iusto, fugiat beatae architecto error itaque maxime? Architecto,
             quae repellat itaque, quia non temporibus adipisci consequuntur perspiciatis veniam, rem iusto vel!  </p>
             <Buttons></Buttons>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./images/03.jpg" class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Computer And Laptop Accesopries</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi iusto, fugiat beatae architecto error itaque maxime? Architecto,
             quae repellat itaque, quia non temporibus adipisci consequuntur perspiciatis veniam, rem iusto vel!  </p>7
             <Buttons></Buttons>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default inicio
