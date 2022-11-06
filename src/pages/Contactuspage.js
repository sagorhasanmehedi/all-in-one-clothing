import { Box } from "@mui/material";
import React from "react";
import ContactsForm from "../components/contsctsus/ContactsForm";
import Contactsus from "../components/contsctsus/Contactsus";
import Header from "../components/heder/Header";

const Contactuspage = () => {
  return (
    <div>
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
      <div className="contact_location">
      <Contactsus />
        <ContactsForm/>
      </div>
      </Box>
    </div>
  );
};

export default Contactuspage;
