import { Box } from "@mui/material";
import React from "react";
import Banner from "../components/home/Banner";
import Gallery from "../components/home/Gallery";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Gallery />
      </Box>
    </div>
  );
};

export default Homepage;
