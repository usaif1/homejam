//dependencies
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

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
    name: "Hellen Jummy",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget 
        laoreet adipiscing. `,
    img: review2,
    flag: usa,
    location: "Palo Alto, CA",
  },
  {
    name: "Isaac Oluwatemilorun",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget 
        laoreet adipiscing. `,
    img: review1,
    flag: italy,
    location: "Palo Alto, CA",
  },
  {
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
      <ShadowCard
        style={{
          background:
            "linear-gradient(143.63deg, #276C73 5.43%, #5293E8 110.6%)",
          width: 38,
          height: "25rem",
          border: "2px solid #E5AF56",
          borderRadius: "1.6rem",
          top: "-19.5rem",
          left: "2rem",
          padding: "0 0 0 2rem",

          mobile: {
            width: 31,
            height: "24rem",
            top: "-20.5rem",
            left: "1rem",
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
          spaceBetween={window.innerWidth > 600 ? 50 : 5}
          centeredSlides={true}
        >
          {reviews.map((review) => {
            return <SwiperSlide>{reviewCard(review)}</SwiperSlide>;
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Reviews;
