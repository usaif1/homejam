//dependencies
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    background: "rgba(17, 18, 41, 1)",
    zIndex: "2",
    width: "27rem",
    height: "39rem",
    borderRadius: "0.8rem",
    color: "white",
  },
  shadow: {
    position: "relative",
    top: "-40.5rem",
    left: "2.5rem",
    borderRadius: "0.8rem",
    background: "linear-gradient(163.41deg, #301A68 0.11%, #234C97 170.69%)",
    zIndex: "-1",
    width: "26rem",
    height: "39rem",
  },
}));
