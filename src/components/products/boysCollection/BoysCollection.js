import React from "react";
import { Box, Grid } from "@mui/material";
import "./BoysCollection.css";
import { useCallback } from "react";
import { useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import img1 from "../../../assets/boys-collection/1.jpg";
import img2 from "../../../assets/boys-collection/2.jpg";
import img3 from "../../../assets/boys-collection/3.jpg";
import img4 from "../../../assets/boys-collection/4.jpg";
import img5 from "../../../assets/boys-collection/5.jpg";
import img6 from "../../../assets/boys-collection/6.jpg";
import img7 from "../../../assets/boys-collection/7.jpg";
import img8 from "../../../assets/boys-collection/8.jpg";
import img9 from "../../../assets/boys-collection/9.jpg";
import img10 from "../../../assets/boys-collection/10.jpg";
import img11 from "../../../assets/boys-collection/11.jpg";
import img12 from "../../../assets/boys-collection/12.jpg";
import img13 from "../../../assets/boys-collection/13.jpg";
import img14 from "../../../assets/boys-collection/14.jpg";
import img15 from "../../../assets/boys-collection/15.jpg";
import img16 from "../../../assets/boys-collection/16.jpg";
import img17 from "../../../assets/boys-collection/17.jpg";
import img18 from "../../../assets/boys-collection/18.jpg";
import img19 from "../../../assets/boys-collection/19.jpg";
import img20 from "../../../assets/boys-collection/20.jpg";
import img21 from "../../../assets/boys-collection/21.jpg";
import img22 from "../../../assets/boys-collection/22.jpg";
import img23 from "../../../assets/boys-collection/23.jpg";
import img24 from "../../../assets/boys-collection/24.jpg";


const BoysCollection = () => {
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
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <div className="boys_collection">
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
    </div>
  );
};

export default BoysCollection;