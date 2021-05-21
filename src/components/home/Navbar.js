//dependencies
import React from "react";

//imports
import homejamNavLogo from "../../assets/navbar/homejam-nav-logo.png";
import { useStyles } from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <div>logo goes here</div>
      <div>all other options go here</div>
    </nav>
  );
};

export default Navbar;
