import React from 'react';
import "../style/home.css";
import hero from "../assets/hero.jpg"

const Home = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={hero} class="d-block w-100" alt="hero" />
          <div class="carousel-caption d-none d-md-block">
            <div class="text">
            <h1>Selamat Datang</h1>
            <p>di website Praktikum Pemrograman Website.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
