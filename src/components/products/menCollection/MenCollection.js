import { Box, Grid } from "@mui/material";
import React from "react";
import "./MenCollcetion.css";
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

const MenCollection = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <div className="men_collection">
        <Grid container spacing={{ md: 2, xs: 3 }}>
          <Grid item md={3}>
            <img src={img1} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img2} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img3} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img4} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img5} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img6} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img7} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img8} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img9} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img10} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img11} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img12} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img13} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img14} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img15} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img16} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img17} alt="" srcset="" />
          </Grid>
          <Grid item md={3}>
            <img src={img18} alt="" srcset="" />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default MenCollection;
