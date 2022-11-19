import React from "react";
import { Box, Grid } from "@mui/material";
import "./MenCollcetion.css";
import { useCallback } from "react";
import { useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import img1 from "../../../assets/men-collection/1.jpg";
import img2 from "../../../assets/men-collection/2.jpg";
import img3 from "../../../assets/men-collection/3.jpg";
import img4 from "../../../assets/men-collection/4.jpg";
import img5 from "../../../assets/men-collection/5.jpg";
import img6 from "../../../assets/men-collection/6.jpg";
import img7 from "../../../assets/men-collection/7.jpg";
import img8 from "../../../assets/men-collection/8.jpg";
import img9 from "../../../assets/men-collection/9.jpg";
import img10 from "../../../assets/men-collection/10.jpg";
import img11 from "../../../assets/men-collection/11.jpg";
import img12 from "../../../assets/men-collection/12.jpg";
import img13 from "../../../assets/men-collection/13.jpg";
import img14 from "../../../assets/men-collection/14.jpg";
import img15 from "../../../assets/men-collection/15.jpg";
import img16 from "../../../assets/men-collection/16.jpg";
import img17 from "../../../assets/men-collection/17.jpg";
import img18 from "../../../assets/men-collection/18.jpg";
import img19 from "../../../assets/men-collection/WhatsApp Image 2022-11-13 at 10.43.41 PM (1).jpeg";
import img20 from "../../../assets/men-collection/WhatsApp Image 2022-11-13 at 10.43.41 PM.jpeg";
import img21 from "../../../assets/men-collection/WhatsApp Image 2022-11-13 at 10.43.42 PM (1).jpeg";
import img22 from "../../../assets/men-collection/WhatsApp Image 2022-11-13 at 10.43.42 PM (2).jpeg";
import img23 from "../../../assets/men-collection/WhatsApp Image 2022-11-13 at 10.43.42 PM.jpeg";
import img24 from "../../../assets/men-collection/WhatsApp Image 2022-11-13 at 10.43.43 PM (1).jpeg";
import img25 from "../../../assets/men-collection/WhatsApp Image 2022-11-13 at 10.43.43 PM (2).jpeg";
import img26 from "../../../assets/men-collection/WhatsApp Image 2022-11-13 at 10.43.43 PM (3).jpeg";
import img27 from "../../../assets/men-collection/WhatsApp Image 2022-11-13 at 10.43.43 PM (4).jpeg";
import img28 from "../../../assets/men-collection/WhatsApp Image 2022-11-13 at 10.43.43 PM.jpeg";

const MenCollection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <div className="men_collection">
        <Grid container spacing={{ md: 2, xs: 3 }}>
          {images.map((src, index) => (
            <Grid item md={3}>
              <img
                src={src}
                onClick={() => openImageViewer(index)}
                key={index}
                style={{ margin: "2px" }}
                alt=""
              />
            </Grid>
          ))}
        </Grid>
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
            }}
            closeOnClickOutside={true}
          />
        )}
      </div>
    </Box>
  );
};

export default MenCollection;
