import React from 'react';
import './carousel.scss'


const Carousel = (props) => {
    return (
        <>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={props.img1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>We're  Passionate about your Grooming</h5>
        <p>For all clients, the Sundara Looks experience is the ultimate word for style and skin care.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={props.img2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <p>Sundara Looks for Hair and Skincare takes pleasure in providing you with 
        the most recent and greatest hairstyles and beauty treatments, resulting
         in the highest levels of style, sensibility, and elegance.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={props.img3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <p>Treat yourself to some tadka in the hottest hair colors. Looking good is not an act, it's a habit.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}

export default Carousel