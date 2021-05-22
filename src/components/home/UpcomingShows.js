//dependencies
import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

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
    <div className={classes.upcomingContainer}>
      {artists.map((artist) => {
        return artistCard(artist);
      })}
    </div>
  );
};

export default UpcomingShows;
