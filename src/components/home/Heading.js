//imports
import { useStyles } from "./styles";

const Heading = () => {
  const classes = useStyles();

  return (
    <div className={classes.headingContainer}>
      <h1 className={classes.heading}>Cari Cari</h1>
      <h3 className={classes.subHeading}>
        Live from their sofa to yours. Get closer to your favorite artists, and
        never miss out.
      </h3>
    </div>
  );
};

export default Heading;
