import React from "react";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/f1.jpg";
import img2 from "../../assets/f5.jpg";
import img3 from "../../assets/f2.jpg";
import img4 from "../../assets/f3.jpg";
import img5 from "../../assets/f4.jpg";

const Gallery = () => {
  let navigate = useNavigate();

  return (
    <div id="products_gallery" name="products_gallery" className="gallery">
      <div>
        <div  onClick={() => navigate("/womenCollection")} class="card_container">
          <img
            src={img1}
            alt=""
            srcset=""
          />
          <div class="overlay">
            <span>Women Collection</span>
          </div>
        </div>
        <div onClick={() => navigate("/girlsCollection")} class="card_container">
          <img src={img2} alt="" srcset="" />
          <div class="overlay">
            <span>Girls Collection</span>
          </div>
        </div>
      </div>
      <div>
        <div onClick={() => navigate("/menCollection")} class="card_container">
          <img src={img3} alt="" srcset="" />
          <div class="overlay">
            <span>Men Collection</span>
          </div>
        </div>

        <div onClick={() => navigate("/boysCollection")} class="card_container">
          <img src={img4} alt="" srcset="" />
          <div class="overlay">
            <span>Boys Collection</span>
          </div>
        </div>

        <div onClick={() => navigate("/infantsCollection")} class="card_container">
          <img src={img5} alt="" srcset="" />
          <div class="overlay">
            <span>Infants Collection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
