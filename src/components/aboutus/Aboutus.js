import React from "react";
import "./Aboutus.css";
import img1 from "../../assets/ab.jpg";
import img2 from "../../assets/009.jpg";
import img3 from "../../assets/014.jpg";

const Aboutus = () => {
  return (
    <div className="about_us">
      <div className="about_us_title">
        <h4>WELCOME TO Fashion2morrow</h4>
        <div className="title_sep"></div>
        <div class="indicator">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="about_content">
        <p>
          Fashion2morrow distinguishes itself with its extensive focus on
          Quality. Always in sync with the latest trends and advancements, the
          brand seeks constant innovation. With its unique blend of services,
          Fashion2morrow can be defined as a between a Knit and Woven
          manufacturer and a design studio. Besides exactly manufacturing orders
          by customer request, the brand is especially renowned for designing
          the collections themselves from scratch. Adopting a customer-oriented
          approach, its experienced and dynamic design team caters to its
          diverse clientele, creating tailored collections that meet the
          requirements of each brand and customer <br />
          Taking advantage of Fashion2morrow comprehensive fabric library,
          clients have the freedom to combine all kinds of styles, patterns, and
          colors in ways that they desire. The firm is able to accommodate all
          types of washing, dyeing, and processing techniques; in compliance
          with customer demand. Committed to responsibly delivering products and
          services.
        </p>
        <img src={img1} alt="" srcset="" />
      </div>

      <div className="about_us_title">
        <h4>WHAT WE DO</h4>
        <div className="title_sep"></div>
        <div class="indicator">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="about_content">
        <p>
          The customer's appreciation for our superior quality, sharp
          estimation, and timely delivery are stepping stones that, made
          ourselves a successful exporter in the market. We have a very good
          team of Merchandisers handling buyer communication and they
          consistently follow the factory from the yarn stage to the shipment.
          They ensure the shipment meets the delivery dates without shortages.
          The merchandiser looks into the time and action plan and make sure the
          production is on track.
        </p>
        <img className="img2" src={img2} alt="" srcset="" />
      </div>

      <div className="about_us_title">
        <h4>WHAT YOU GET</h4>
        <div className="title_sep"></div>
        <div class="indicator">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="about_content">
        <p>
          We provide stability, durability and best price. We are known for
          quality products and delivering goods at the specified time, Quality
          has always been our first priority. Also we can work with all kind of
          fabrics made of fine & organic cotton, blends with modal, tencel
          fibers and mélange verities in various structures such as jersey,
          Pique, Interlock, 1X1 Rib, terry, fleece & jacquard designs with solid
          and yarn dyed for our clients as per the requirement.
        </p>
        <img className="img3" src={img3} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Aboutus;
