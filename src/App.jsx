import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = document.images;
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setIsLoading(false);
      }
    };

    if (images.length === 0) {
      setIsLoading(false);
    } else {
      for (let i = 0; i < images.length; i++) {
        if (images[i].complete) {
          handleImageLoad();
        } else {
          images[i].addEventListener("load", handleImageLoad);
          images[i].addEventListener("error", handleImageLoad);
        }
      }
    }
  }, []);

  return (
    <div style={{ fontFamily: "Muttcha" }}>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
