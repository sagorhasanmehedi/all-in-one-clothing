import { Box } from "@mui/material";
import React from "react";
import Header from "../components/heder/Header";
import Banner from "../components/home/Banner";
import Gallery from "../components/home/Gallery";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Gallery />
      </Box>
    </div>
  );
};

export default Homepage;
