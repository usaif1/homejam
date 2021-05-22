//dependencies
import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  /*Navbar*/
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

  /*Labels*/
  roundedContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "1.8rem",
    borderRadius: "50%",
    border: "1px solid white",
    height: "21rem",
    width: "21rem",
  },
  labelNumber: {
    fontFamily: "'Libre Baskerville', serif",
    fontSize: "2.4rem",
  },

  labelText: {
    fontFamily: "'Nunito', sans-serif",
    color: "white",
    opacity: "0.6",
    margin: "0",
  },

  /*Upcoming Shows*/
  upcomingContainer: {
    marginTop: "12.5rem",
    display: "flex",
  },

  artistImage: {
    objectFit: "contain",
    width: "100%",
  },

  contentContainer: {
    marginLeft: "2rem",
  },

  contentWrapper: {
    background: "rgba(229, 197, 88, 1)",
    maxWidth: "fit-content",
    padding: "0 5px",
  },

  badge: {
    color: "#682F26",
    fontSize: "1.2rem",
    fontWeight: "600",
    fontFamily: "'Nunito', sans-serif",
  },

  artistName: {
    fontSize: "2rem",
    fontFamily: "'Libre Baskerville', serif",
    fontWeight: "700",
  },

  moreContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  moreWrapper: {
    display: "flex",
    alignItems: "center",
    color: "rgba(2, 89, 235, 1)",
  },

  more: {
    fontSize: "16px",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: "600",
  },

  arrowIcon: {
    fontSize: "30px",
    marginLeft: "1rem",
  },

  extraContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "2rem",
  },

  pipe: {
    fontSize: "1.6rem",
    color: "white",
    opacity: "0.6",
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
    /*label*/
    roundedContainer: {
      height: "16rem",
      width: "16rem",
    },
    labelNumber: {
      margin: "0",
    },
  },
}));
