//dependencies
import React from "react";
import { Container } from "@material-ui/core";

//imports
import { Navbar } from "../components/home";
import { useStyles } from "./styles";

const HomePage = () => {
  const classes = useStyles();

  return (
    <Container classes={{ root: classes.homeContainer }}>
      <Navbar />
    </Container>
  );
};

export default HomePage;
