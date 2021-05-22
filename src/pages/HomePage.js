//dependencies
import React from "react";
import { Container } from "@material-ui/core";

//imports
import {
  Navbar,
  Heading,
  Labels,
  Reviews,
  UpcomingShows,
} from "../components/home";
import { useStyles } from "./styles";

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeWrapper}>
      <Container classes={{ root: classes.homeContainer }}>
        <Navbar />
        <Heading />
        <Labels />
      </Container>
    </div>
  );
};

export default HomePage;
