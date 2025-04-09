import React from 'react'
import './HeroCategories.css'

const HeroCategories = () => {
  const categories = [
    {
      title: "Men's Ethnic",
      subtitle: "Explore traditional styles that blend culture with class.",
      cta: "Discover Now",
      imageText: "PHOTO"
    },
    {
      title: "Women's Ethnic",
      subtitle: "Unveil elegance in timeless ethnic fashion.",
      cta: "Discover Now",
      imageText: "PHOTO"
    }
  ];

  return (
    <div className="hero-categories-section">
      {categories.map((cat, index) => (
        <div key={index} className="hero-category-card">
          <div className="hero-category-text">
            <h3 className='h3head'>{cat.title}</h3>
            <p className='para'>{cat.subtitle}</p>
            <a href="#" className='para'>{cat.cta}</a>
          </div>
          <div className="hero-category-image">
            <img src={cat.imageText} alt={cat.imageText} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroCategories;
