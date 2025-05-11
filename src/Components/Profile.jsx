import React, { useState } from "react";
import "../assets/css/Profile.css";

const DiyCraft = () => {
  const [crafts, setCrafts] = useState([]);
  const [showCrafts, setShowCrafts] = useState(false);

  const fetchCrafts = () => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        if (data.data && data.data.length > 0) {
          setCrafts(data.data);
          setShowCrafts(true);
        } else {
          console.log("No artworks found in the API response.");
        }
      })
      .catch((error) => {
        console.error("Error fetching craft data:", error);
      });
  };

  return (
    <div className="diy-craft">
      <h1>View award winning paintings</h1>
      <button onClick={fetchCrafts} className="load-crafts-btn">
        Load Crafts
      </button>
     
      {showCrafts && (
        <div className="crafts-container">
          {crafts.map((craft, index) => (
            <div key={index} className="craft-card">
              <h3>{craft.title}</h3>
              {craft.image_id && (
                <img
                  src={`https://www.artic.edu/iiif/2/${craft.image_id}/full/843,/0/default.jpg`}
                  alt={craft.title}
                  className="craft-image"
                />
              )}
              <p>{craft.artist_title || "Unknown Artist"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DiyCraft;
