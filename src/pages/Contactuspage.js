import { Box } from "@mui/material";
import React from "react";
import Contactsus from "../components/contsctsus/Contactsus";
import Header from "../components/heder/Header";

const Contactuspage = () => {
  return (
    <div>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Contactsus />
      </Box>
    </div>
  );
};

export default Contactuspage;
