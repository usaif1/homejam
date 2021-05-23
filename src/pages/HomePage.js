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
    <div
      style={{
        background:
          "linear-gradient(180deg,rgba(5,11,20,1.28)0%,rgba(1,13,32,0.69)67.53%,#0A0B1A 85.33%)",
      }}
    >
      <div className={classes.homeWrapper}>
        <Container classes={{ root: classes.homeContainer }}>
          <Navbar />
          <Heading />
          <Labels />
          <UpcomingShows />
          <Reviews />
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
