import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 0,
    marginTop: 27,
    minWidth: 180,
    color: "#fff",
    background: "rgb(0 0 0 / 78%)",

    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "5px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: "#f44336",
        marginRight: 2,
      },
      "&:active": {
        backgroundColor: "#f44336",
      },
      "&:hover": {
        backgroundColor: "#d32f2f",
      },
    },
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            {/* <Link to="/">FASHION 2MORROW</Link> */}
            <h1 className="header_text"><Link to="/">FASHION 2MORROW</Link></h1> 
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/ourservices">Our Services</Link>
          <Link
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            // onMouseOver={handleClick}
          >
            Products
          </Link>
          <StyledMenu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/menCollection">Men Collection</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/boysCollection">Boys Collection</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/infantsCollection">Infants Collection</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/womenCollection">Women Collection</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/girlsCollection">Girls Collection</Link>
            </MenuItem>
          </StyledMenu>

          {/* <Link class="dropdown">
            <Link
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              onMouseOver={handleClick}
              class="dropdown_title"
            >
              Products
            </Link>
            <div class="dropdown-content">
              <Link to="/menCollection">Men Collection</Link>
              <Link to="/boysCollection">Boys Collection</Link>
              <Link to="/infantsCollection">Infants Collection</Link>
              <Link to="/womenCollection">Women Collection</Link>
              <Link to="/girlsCollection">Girls Collection</Link>
            </div>
          </Link> */}

          <Link to="/contactus">Contact Us</Link>
        </div>
      </div>
      <div className="nav_bottom_border"></div>
    </>
  );
};

export default Header;
