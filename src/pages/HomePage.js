//dependencies
import React from "react";
import { Container } from "@material-ui/core";

//imports
import { Navbar, Heading } from "../components/home";
import { useStyles } from "./styles";

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeWrapper}>
      <Container classes={{ root: classes.homeContainer }}>
        <Navbar />
        <Heading />
      </Container>
    </div>
  );
};

export default HomePage;
