//dependencies
import React from "react";

//imports
import { useStyles } from "./styles";

const ShadowCard = ({ children, style }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.card}>{children}</div>
      <div className={classes.shadow}></div>
    </>
  );
};

export default ShadowCard;
