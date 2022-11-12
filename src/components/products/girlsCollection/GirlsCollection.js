import React from "react";
import { Box, Grid } from "@mui/material";
import "./GirslCollection.css";
import { useCallback } from "react";
import { useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import img1 from "../../../assets/girls-collection/1.jpg";
import img2 from "../../../assets/girls-collection/2.jpg";
import img3 from "../../../assets/girls-collection/3.jpg";
import img4 from "../../../assets/girls-collection/4.jpg";
import img5 from "../../../assets/girls-collection/5.jpg";
import img6 from "../../../assets/girls-collection/6.jpg";
import img7 from "../../../assets/girls-collection/7.jpg";
import img8 from "../../../assets/girls-collection/8.jpg";
import img9 from "../../../assets/girls-collection/9.jpg";
import img10 from "../../../assets/girls-collection/10.jpg";
import img11 from "../../../assets/girls-collection/11.jpg";
import img12 from "../../../assets/girls-collection/12.jpg";



const GirlsCollection = () => {
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
    img12
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
        <div className="girls_collection">
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

export default GirlsCollection;