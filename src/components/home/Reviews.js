//dependencies
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { Slide } from "react-reveal";
import { v4 as uuid } from "uuid";

// Import Swiper styles
import "swiper/swiper-bundle.css";

//imports
import { useStyles } from "./styles";
import ShadowCard from "../common/ShadowCard";
import italy from "../../assets/reviews/flags/italy.png";
import usa from "../../assets/reviews/flags/usa.png";
import review1 from "../../assets/reviews/review1.png";
import review2 from "../../assets/reviews/review2.png";
import review3 from "../../assets/reviews/review3.png";

const reviews = [
  {
    id: uuid(),
    name: "Hellen Jummy",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget 
        laoreet adipiscing. `,
    img: review2,
    flag: usa,
    location: "Palo Alto, CA",
  },
  {
    id: uuid(),
    name: "Isaac Oluwatemilorun",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget 
        laoreet adipiscing. `,
    img: review1,
    flag: italy,
    location: "Palo Alto, CA",
  },
  {
    id: uuid(),
    name: "Hellen Jummy",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget 
        laoreet adipiscing. `,
    img: review3,
    location: "Palo Alto, CA",
    flag: usa,
  },
];

const Reviews = () => {
  const classes = useStyles();

  const reviewCard = (review) => {
    return (
      <Slide right>
        <ShadowCard
          style={{
            background:
              "linear-gradient(143.63deg, #276C73 5.43%, #5293E8 110.6%)",
            width: 38,
            height: "25rem",
            border: "2px solid #E5AF56",
            borderRadius: "1.6rem",
            top: "-20rem",
            left: "-1rem",
            padding: "0 0 0 2rem",
            shadow: {
              width: 39,
              height: "25rem",
            },
            mobile: {
              width: 25,
              height: "24rem",
              top: "-21rem",
              left: "-1rem",
              shadow: {
                width: 28,
                height: "24rem",
              },
            },
          }}
        >
          <div className={classes.reviewHeader}>
            <div>
              <img
                src={review.img}
                alt="reviewer"
                style={{
                  objectFit: "contain",
                  verticalAlign: "bottom",
                }}
              />
            </div>
            <div className={classes.reviewNameContainer}>
              <p>{review.name}</p>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <div className={classes.flag}>
                  <img
                    src={review.flag}
                    alt="flag"
                    style={{
                      objectFit: "contain",
                      verticalAlign: "bottom",
                      width: "100%",
                    }}
                  />
                </div>
                <p className={classes.location}>{review.location}</p>
              </div>
            </div>
          </div>
          <p className={classes.reviewText}>{review.text}</p>
        </ShadowCard>
      </Slide>
    );
  };

  return (
    <>
      <div className={classes.upcomingHeadingContainer}>
        <div className={classes.upcomingHeadingWrapper}>
          <h2 className={classes.upcomingHeading}>Reviews</h2>
          <h3
            className={classes.upcomingSubheading}
            style={{ color: "white", fontSize: "1.6rem" }}
          >
            1/12 &nbsp; <ArrowBack /> &nbsp;&nbsp;
            <ArrowForward />
          </h3>
        </div>
        <hr className={classes.hr} />
      </div>

      <div className={classes.reviewsContainer}>
        <Swiper
          style={{ paddingTop: "1rem" }}
          slidesPerView={window.innerWidth > 600 ? 3 : 1.2}
        >
          {reviews.map((review) => {
            return (
              <SwiperSlide key={review.id}>{reviewCard(review)}</SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Reviews;
