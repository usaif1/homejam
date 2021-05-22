//dependencies
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  CalendarTodayOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";

//imports
import { useStyles } from "./styles";

const iconStyles = {
  fontSize: "2.5rem",
};

const labels = [
  {
    icon: (
      <FavoriteBorderOutlined style={{ ...iconStyles, color: "#0259EB" }} />
    ),
    number: "0",
    text: "Label",
  },
  {
    icon: <CalendarTodayOutlined style={{ ...iconStyles }} />,
    number: "0",
    text: "Label",
  },
  {
    icon: <CalendarTodayOutlined style={{ ...iconStyles }} />,
    number: "0",
    text: "Label",
  },
  {
    icon: <CalendarTodayOutlined style={{ ...iconStyles }} />,
    number: "0",
    text: "Label",
  },
];

const Labels = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        marginTop: "22rem",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {labels.map((label) => {
        return (
          <div className={classes.roundedContainer}>
            <div>{label.icon}</div>
            <p className={classes.labelNumber}>{label.number}</p>
            <p className={classes.labelText}>{label.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Labels;
