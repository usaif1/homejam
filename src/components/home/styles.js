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
    display: "flex",
    justifyContent: "space-around",
  },

  artistImage: {
    objectFit: "contain",
    width: "100%",
    verticalAlign: "bottom",
  },

  contentContainer: {
    paddingLeft: "2rem",
    paddingTop: "3rem",
    background: "#111229",
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
    margin: "0",
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

  slideClass: {
    width: "300px",
  },

  upcomingHeadingContainer: {
    marginBottom: "2rem",
    marginTop: "12.5rem",
  },

  upcomingHeadingWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },

  upcomingHeading: {
    color: "white",
    fontSize: "3.2rem",
    fontFamily: "'Libre Baskerville', serif",
    margin: "0",
  },
  upcomingSubheading: {
    color: "#E5C558",
    fontSize: "1.6rem",
    margin: "0",
  },

  hr: {
    background: "blue",
    width: "5rem",
    height: "0.3rem",
    border: "none",
    margin: "1rem 0 ",
    borderRadius: "0.8rem",
  },

  /*Reviews*/
  reviewCardContainer: {
    width: "36rem",
    height: "25rem",
    border: "2px solid #E5AF56",
    position: "relative",
    zIndex: "2",
    paddingLeft: "2.4rem",
    background: "#0A0B1A",
    borderRadius: "1.6rem",
  },

  reviewHeader: {
    marginTop: "2rem",
    display: "flex",
    alignItems: "center",
    background: "inherit",
  },

  reviewNameContainer: {
    marginLeft: "2rem",
  },

  flag: {
    width: "24px",
    height: "24px",
  },
  location: {
    color: "#E5C558",
    fontSize: "1.1rem",
    fontWeight: "400",
    margin: "0 0 0 1rem",
  },
  reviewText: {
    margin: "5rem 0 0 0",
    fontSize: "1.6rem",
    fontFamily: "'Nunito', sans-serif",
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
    upcomingHeading: {
      fontSize: "2rem",
    },
    reviewText: {
      fontSize: "1.4rem",
    },
  },
}));
