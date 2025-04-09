import React, { useState } from "react";
import "./Hero.css";
import VectorGroup from "../Vector/VectorGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import HeroCategories from "./HeroCategories";

const productData = [
  {
    title: "WAY KAMBAS MINI EBONY",
    description: "MATOA Way Kambas Maple comes with a material form of Canadian Maple.",
    imageText: "PHOTO",
  },
  {
    title: "TOMIA MAPLE",
    description: "Inspired by the natural beauty of Tomia Island, made with premium Maple wood.",
    imageText: "PHOTO 2",
  },
  {
    title: "GILI ROSEWOOD",
    description: "Crafted from Indonesian Rosewood for a luxurious and durable finish.",
    imageText: "PHOTO 3",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % productData.length);
    setQuantity(1); // reset quantity on slide change
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + productData.length) % productData.length);
    setQuantity(1);
  };

  const increase = () => setQuantity((q) => Math.min(q + 1, 99));
  const decrease = () => setQuantity((q) => Math.max(q - 1, 1));

  const { title, description, imageText } = productData[currentIndex];

  return (
    <>
    <section className="hero-matoa-section">
     <VectorGroup />
      <div className="hero-matoa-container">
        {/* Left: Photo */}
        <div className="hero-photo-box">
          <div className="photo-placeholder">{imageText}</div>
        </div>

        {/* Right: Details */}
        <div className="hero-details-box">
          <h1 className="hero-title">{title}</h1>
          <hr className="hero-divider" />
          <p className="hero-description">{description}</p>
          <a href="#" className="hero-discover-link"><span>Discover</span></a>

          <div className="hero-action-row">
            <div className="quantity-selector">
              <button onClick={decrease}>−</button>
              <span>{quantity.toString().padStart(2, '0')}</span>
              <button onClick={increase}>+</button>
            </div>

            <button className="cta-btn add-to-cart">
              <FontAwesomeIcon icon={faCartArrowDown} />Add to cart
            </button>
            {/* <button className="cta-btn cicil-btn">cicil</button> */}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="hero-arrows">
        <button className="arrow-btn outline" onClick={prevSlide}>←</button>
        <button className="arrow-btn filled" onClick={nextSlide}>→</button>
      </div>
    </section>
    <HeroCategories />
    </>
  );
};

export default Hero;
