//dependencies
import React from "react";

//imports
import { useStyles } from "./styles";

const ShadowCard = ({ children, style }) => {
  const classes = useStyles(style);

  return (
    <div>
      <div className={classes.card}>
        {children}
        <div className={classes.shadow} />
      </div>
    </div>
  );
};

export default ShadowCard;
