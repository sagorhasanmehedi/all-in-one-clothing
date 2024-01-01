import React from "react";
import emailjs from "@emailjs/browser";
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
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_l226ect",
        "template_bb3ljb8",
        form.current,
        "user_khwFsSIjUubtZ3zoYVB89"
      )
      .then(
        (result) => {
          Swal.fire("Thank you! Your message has been successfully sent.");
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Something went wrong! try again later",
          });
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact_form">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          <Grid item xs={12} md={4}>
            <input type="text" name="user_name" placeholder="Name" required />
          </Grid>
          <Grid item xs={12} md={4}>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <input type="text" placeholder="Mobail Number" />
          </Grid>
          <Grid item xs={12}>
            <textarea name="message" placeholder="Message" required></textarea>
          </Grid>
        </Grid>
        <input className="send_button" type="submit" value="SEND" />
      </Box>
    </form>
  );
}
