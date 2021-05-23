//dependencies
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  CalendarTodayOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import { v4 as uuid } from "uuid";

// Import Swiper styles
import "swiper/swiper-bundle.css";

//imports
import { useStyles } from "./styles";
import "./swiper.css";

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
    id: uuid(),
  },
  {
    icon: <CalendarTodayOutlined style={{ ...iconStyles }} />,
    number: "0",
    text: "Label",
    id: uuid(),
  },
  {
    icon: <CalendarTodayOutlined style={{ ...iconStyles }} />,
    number: "0",
    text: "Label",
    id: uuid(),
  },
  {
    icon: <CalendarTodayOutlined style={{ ...iconStyles }} />,
    number: "0",
    text: "Label",
    id: uuid(),
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
      <Swiper
        spaceBetween={window.innerWidth > 600 ? 50 : 15}
        slidesPerView={window.innerWidth > 600 ? 5 : 2}
      >
        {labels.map((label) => {
          return (
            <SwiperSlide
              style={{ display: "flex" }}
              slidesPerView={2}
              key={label.id}
            >
              <div className={classes.roundedContainer}>
                <div>{label.icon}</div>
                <p className={classes.labelNumber}>{label.number}</p>
                <p className={classes.labelText}>{label.text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Labels;
