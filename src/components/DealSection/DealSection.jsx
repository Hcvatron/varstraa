import React from 'react';
import './DealSection.css'; // Import the CSS file

const formatRupiah = (num) => {
  return `Rp ${num.toLocaleString('id-ID')}`;
};

const DealSection = ({ title, products }) => {
  return (
    <section className="deal-section">
      <h2 className="deal-title">{title}</h2>
      <div className="deal-grid">
        {products.map((product, index) => {
          const discountPrice = Math.floor(product.originalPrice * (1 - product.discountPercent / 100));
          return (
            <div key={index} className="deal-card">
              <img src={product.image} alt={product.name} className="deal-image" />
              <div className="deal-info">
                <h3 className="deal-name">{product.name}</h3>
                <p className="deal-discount">{product.discountPercent}% Off</p>
                <p className="deal-original">{formatRupiah(product.originalPrice)}</p>
                <p className="deal-price">{formatRupiah(discountPrice)}</p>
                <button className="deal-button">Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DealSection;
