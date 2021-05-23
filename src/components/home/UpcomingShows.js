//dependencies
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

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
    name: "Benny Dayal",
    img: benny,
    badge: "Folk",
  },
  {
    name: "Vijay Yesudas",
    img: vijay,
    badge: "Bollywood",
  },
  {
    name: "Andrea Jeremiah",
    img: andrea,
    badge: "Folk",
  },
  {
    name: "Shilpa Rao",
    img: shilpa,
    badge: "Folk",
  },
];

const UpcomingShows = () => {
  const classes = useStyles();

  const artistCard = (artist) => {
    return (
      <ShadowCard>
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
          spaceBetween={window.innerWidth > 600 ? 50 : 5}
          centeredSlides={true}
        >
          {artists.map((artist) => {
            return <SwiperSlide>{artistCard(artist)}</SwiperSlide>;
          })}
        </Swiper>
      </div>
    </>
  );
};

export default UpcomingShows;
