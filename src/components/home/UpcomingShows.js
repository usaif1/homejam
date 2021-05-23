//dependencies
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuid } from "uuid";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Slide } from "react-reveal";

// Import Swiper styles
import "swiper/swiper-bundle.css";

//imports
import benny from "../../assets/upcoming/benny.png";
import vijay from "../../assets/upcoming/vijay.png";
import andrea from "../../assets/upcoming/andrea.png";
import shilpa from "../../assets/upcoming/shilpa.png";
import { ReactComponent as Ticket } from "../../assets/upcoming/ticket.svg";
import ShadowCard from "../common/ShadowCard";
import { useStyles } from "./styles";

const artists = [
  {
    id: uuid(),
    name: "Benny Dayal",
    img: benny,
    badge: "Folk",
  },
  {
    id: uuid(),
    name: "Vijay Yesudas",
    img: vijay,
    badge: "Bollywood",
  },
  {
    id: uuid(),
    name: "Andrea Jeremiah",
    img: andrea,
    badge: "Folk",
  },
  {
    id: uuid(),
    name: "Shilpa Rao",
    img: shilpa,
    badge: "Folk",
  },
];

const UpcomingShows = () => {
  const classes = useStyles();

  const artistCard = (artist) => {
    return (
      <Slide right>
        <ShadowCard
          style={{
            background:
              "linear-gradient(163.41deg, #301A68 0.11%, #234C97 170.69%)",
            width: 27,
            height: "39rem",
            borderRadius: "0.8rem",
            border: "none",
            top: "-39.5rem",
            left: "1rem",
            padding: "0",
            shadow: {
              width: 26,
              height: "38rem",
            },
            mobile: {
              width: 23,
              height: "37rem",
              top: "-37rem",
              left: "2rem",
              shadow: {
                width: 23,
                height: "38rem",
              },
            },
          }}
        >
          <div>
            <img
              src={artist.img}
              alt={artist.name}
              className={classes.artistImage}
            />
          </div>
          <div className={classes.contentContainer}>
            <div>
              <div className={classes.contentWrapper}>
                <p className={classes.badge}>{artist.badge}</p>
              </div>
              <p className={classes.artistName}>{artist.name}</p>
            </div>
            <div className={classes.moreContainer}>
              <div className={classes.moreWrapper}>
                <p className={classes.more}>More Info </p>
                <ArrowRightAltIcon className={classes.arrowIcon} />
              </div>
              <div className={classes.extraContainer}>
                <p className={classes.pipe}>|</p>
                <Ticket />
              </div>
            </div>
          </div>
        </ShadowCard>
      </Slide>
    );
  };

  return (
    <>
      <div className={classes.upcomingHeadingContainer}>
        <div className={classes.upcomingHeadingWrapper}>
          <h2 className={classes.upcomingHeading}>Upcoming Shows</h2>
          <h3 className={classes.upcomingSubheading}>View All</h3>
        </div>
        <hr className={classes.hr} />
      </div>
      <div className={classes.upcomingContainer}>
        <Swiper
          style={{ paddingTop: "1rem" }}
          slidesPerView={window.innerWidth > 600 ? 4 : 1.3}
        >
          {artists.map((artist) => {
            return (
              <SwiperSlide key={artist.id}>{artistCard(artist)}</SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default UpcomingShows;
