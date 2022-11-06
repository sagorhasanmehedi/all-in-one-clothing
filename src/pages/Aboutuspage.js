import { Box } from "@mui/material";
import React from "react";
import Aboutus from "../components/aboutus/Aboutus";
import Header from "../components/heder/Header";

const Aboutuspage = () => {
  return (
    <div>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Aboutus />
      </Box>
      
    </div>
  );
};
export default Aboutuspage;
