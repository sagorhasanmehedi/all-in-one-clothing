import * as React from "react";
import "./ContactsForm.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Swal from "sweetalert2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ContactsForm() {
  const fireSwal = () => {
    Swal.fire({
      title: "This feature not available at this moment",
    });
  };
  return (
    <div className="contact_form">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          <Grid item xs={12} md={4}>
            <input type="text" placeholder="Name" />
          </Grid>
          <Grid item xs={12} md={4}>
            <input type="text" placeholder="Email" />
          </Grid>
          <Grid item xs={12} md={4}>
            <input type="text" placeholder="Telephone" />
          </Grid>
          <Grid item xs={12}>
            <textarea
              placeholder="Message"
              onfocus="this.value = '';"
              onblur="if (this.value == '') {this.value = 'Message...';}"
              required
              spellcheck="false"
            ></textarea>
          </Grid>
        </Grid>
        <button onClick={fireSwal}>SEND</button>
      </Box>
    </div>
  );
}
