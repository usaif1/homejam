//dependencies
import makeStyles from "@material-ui/styles/makeStyles";

//imports
import bgImage from "../assets/bgImg.png";

export const useStyles = makeStyles((theme) => ({
  /*HomePage*/
  homeWrapper: {
    background: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "contain",
    // height: "100vh",
    paddingTop: "1rem",
  },

  homeContainer: {
    maxWidth: "85%",
  },

  [theme.breakpoints.down("sm")]: {
    homeWrapper: {
      backgroundSize: "initial",
    },
    homeContainer: {
      maxWidth: "100%",
    },
  },
}));
