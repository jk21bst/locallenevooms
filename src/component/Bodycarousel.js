import React from 'react';
import c1 from './../images/c1.jpg';
import c2 from './../images/c2.jpg';
import c3 from './../images/c3.jpg';

export default function Bodycarousel() {
  return (
    <div >
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={c1} width="1400" height="300" alt="img1"/>
    </div>
    <div className="carousel-item">
      <img src={c2} width="50" height="300" className="d-block w-100" alt="img2"/>
    </div>
    <div className="carousel-item">
      <img src={c3} width="50" height="300" className="d-block w-100" alt="img3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
