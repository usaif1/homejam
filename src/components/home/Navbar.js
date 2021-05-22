//dependencies
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import MenuIcon from "@material-ui/icons/Menu";

//imports
import homejamNavLogo from "../../assets/navbar/homejam-nav-logo.png";
import { useStyles } from "./styles";

const iconStyles = {
  color: "white",
  fontSize: window.innerWidth > 600 ? "1.6rem" : "2.5rem",
  marginRight: "0.3rem",
  cursor: "pointer",
};

const deskTopLinks = [
  {
    text: "Search",
    path: "/search",
    icon: <SearchIcon style={iconStyles} />,
  },
  {
    text: "Help",
    path: "/help",
    icon: null,
  },
  {
    text: "Account",
    path: "/account",
    icon: null,
  },
  {
    text: "",
    path: "/cart",
    icon: <LocalMallOutlinedIcon style={iconStyles} />,
  },
];

const mobileLinks = [
  {
    icon: <SearchIcon style={iconStyles} />,
  },
  {
    icon: <LocalMallOutlinedIcon style={iconStyles} />,
  },
  {
    icon: <MenuIcon style={iconStyles} />,
  },
];

const Navbar = () => {
  const classes = useStyles();

  const renderDeskTop = () => {
    return deskTopLinks.map((link) => {
      return (
        <div className={classes.linkContainer}>
          {link.icon}
          <Link to={link.path} className={classes.navLink}>
            {link.text}
          </Link>
        </div>
      );
    });
  };

  const renderMobile = () => {
    return mobileLinks.map((link) => {
      return <div className={classes.linkContainer}>{link.icon}</div>;
    });
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.navLogoContainer}>
        <img
          src={homejamNavLogo}
          alt="homejam-logo"
          className={classes.navLogo}
        />
      </div>
      <div className={classes.linksListContainer}>
        {/* {deskTopLinks.map((link) => {
          return (
            <div className={classes.linkContainer}>
              {link.icon}
              <Link to={link.path} className={classes.navLink}>
                <p className={classes.linkText}>{link.text}</p>
              </Link>
            </div>
          );
        })} */}
        {window.innerWidth > 600 ? renderDeskTop() : renderMobile()}
      </div>
    </nav>
  );
};

export default Navbar;
