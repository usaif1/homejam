//dependencies
import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  /*navbar*/
  nav: {
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLogoContainer: {},

  navLogo: {
    objectFit: "contain",
  },

  linksListContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "30rem",
  },

  linkContainer: {
    display: "flex",
    alignItems: "center",
  },

  navLink: {
    textDecoration: "none",
    color: "white",
    fontSize: "1.4rem",
    fontWeight: "400",
  },

  icon: {
    color: "white",
    fontSize: "1rem",
  },

  /*Heading*/
  headingContainer: {
    marginTop: "20rem",
  },

  heading: {
    fontSize: "8rem",
    fontWeight: "700",
    fontFamily: "'Libre Baskerville', serif",
    color: "white",
  },

  subHeading: {
    fontSize: "2.4rem",
    fontFamily: "'Nunito', sans-serif",
    color: "white",
    opacity: "0.6",
    fontWeight: "400",
    width: "60rem",
  },

  /*Media Queries*/
  [theme.breakpoints.down("sm")]: {
    /*navbar*/
    navLogoContainer: {
      width: "25%",
    },
    navLogo: {
      width: "100%",
    },
    linksListContainer: {
      width: "12rem",
    },
    /*heading*/
    heading: {
      fontSize: "4rem",
    },
    subHeading: {
      fontSize: "1.6rem",
      width: "unset",
    },
  },
}));
