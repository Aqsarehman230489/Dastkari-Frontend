import React, { useState } from "react";
import "../assets/css/featureditems.css";
import pord1 from '../assets/images/prod1.jpg';
import pord2 from '../assets/images/prod2.jpg';
import pord3 from '../assets/images/prod3.jpg';
import pord4 from '../assets/images/prod4.jpg';
import pord5 from '../assets/images/prod5.jpg';
import pord6 from '../assets/images/prod6.jpg';
import pord7 from '../assets/images/prod7.jpg';
import pord8 from '../assets/images/prod8.jpg';
import artist1 from '../assets/images/artist1.jpg';
import artist2 from '../assets/images/artist2.png';
import artist3 from '../assets/images/artist3.jpeg';
import artist4 from '../assets/images/artist4.jpeg';


const products = [
  {
    id: 1,
    name: "Handwoven Basket",
    image: pord1,
    price: "₨ 1200",
    description: "A beautifully handwoven basket perfect for storage or decoration.",
    artist: "Ayesha Khan",
    artistProfile: "/profile/ayesha-khan",
    artistImage: artist1,
  },
  {
    id: 2,
    name: "Ceramic Mug",
    image: pord2,
    price: "₨ 500",
    description: "A unique ceramic mug with beautiful hand-painted designs.",
    artist: "Imran Ali",
    artistProfile: "/profile/imran-ali",
    artistImage: artist2,
  },
  {
    id: 3,
    name: "Wooden Sculpture",
    image: pord3,
    price: "₨ 2500",
    description: "A wooden sculpture representing Pakistani heritage.",
    artist: "Amna Amjad",
    artistProfile: "/profile/sohail-mehmood",
    artistImage: artist3,
  },
  {
    id: 4,
    name: "Embroidered Shawl",
    image: pord4,
    price: "₨ 3500",
    description: "A traditional hand-embroidered shawl made from soft wool.",
    artist: "Fatima Noor",
    artistProfile: "/profile/fatima-noor",
    artistImage: artist4,
  },
  {
    id: 5,
    name: "Wooden Storage Box",
    image: pord5,
    price: "₨ 1000",
    description: "Store your clothes in this durable wooden box. ",
    artist: "Fatima Noor",
    artistProfile: "/profile/fatima-noor",
    artistImage: artist4,
  },{
    id: 6,
    name: "swaddle",
    image: pord6,
    price: "₨ 5000",
    description: "soft and breathable, to wrap a baby to provide warmth and comfort.",
    artist: "Fatima Noor",
    artistProfile: "/profile/fatima-noor",
    artistImage: artist4,
  },{
    id: 7,
    name: "Ceramic Dinner Set",
    image: pord7,
    price: "₨ 4000",
    description: "Handcrafted Multani ceramic dinner set featuring vibrant designs.",
    artist: "Imran Ali",
    artistProfile: "/profile/imran-ali",
    artistImage: artist2,
  },{
    id: 8,
    name: "Carpet",
    image: pord8,
    price: "₨ 3500",
    description: "A handwoven masterpiece blending vibrant red with earthy khaki tones.",
    artist: "Fatima Noor",
    artistProfile: "/profile/fatima-noor",
    artistImage: artist4,
  },
];

function ProductListing() {
  const [hoveredArtist, setHoveredArtist] = useState(null);

  const handleMouseEnter = (artist) => {
    setHoveredArtist(artist);
  };

  const handleMouseLeave = () => {
    setHoveredArtist(null);
  };

  return (
    <>
    <div className="product-listing-container">
      <h1 className="page-title">Discover the Art of Authentic Craftsmanship</h1>
      <div className="product-listing">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>

              <div
                className="artist-name"
                onMouseEnter={() => handleMouseEnter(product.artist)}
                onMouseLeave={handleMouseLeave}
              >
                {product.artist}
                {hoveredArtist === product.artist && (
                  <div className="artist-card">
                    <div className="artist-image-container">
                      <img src={product.artistImage} alt={product.artist} className="artist-image" />
                    </div>
                    <a href={product.artistProfile} target="_blank" rel="noopener noreferrer">
                      View {product.artist}'s Profile
                    </a>
                  </div>
                )}
              </div>

              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}

        </div>
         <div id="load-more-container">
         <button id="load-more-button" class="load-more-btn">Load More</button>
         <div id="loading-dots" class="loading-dots"></div>
         </div>
    </div>
  
    </>
  );
}

export default ProductListing;
