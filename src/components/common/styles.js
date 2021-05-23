//dependencies
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme, style) => ({
  card: {
    position: "relative",
    background: "rgba(17, 18, 41, 1)",
    width: (style) => `${style.width - 1}rem`,
    height: (style) => style.height,
    borderRadius: (style) => style.borderRadius,
    border: (style) => style.border,
    padding: (style) => style.padding,
    color: "white",
  },
  shadow: {
    position: "relative",
    top: (style) => style.top,
    left: (style) => style.left,
    borderRadius: (style) => style.borderRadius,
    background: (style) => style.background,
    zIndex: "-1",
    width: (style) => `${style.shadow.width}rem`,
    height: (style) => style.shadow.height,
  },

  [theme.breakpoints.down("xs")]: {
    card: {
      width: (style) => `${style.mobile.width}rem`,
      height: (style) => style.mobile.height,
    },
    shadow: {
      width: (style) =>
        `${style.mobile.shadow?.width - 1}rem` || `${style.mobile.width}`,
      height: (style) => style.mobile.shadow?.height || style.mobile.height,
      top: (style) => style.mobile.top,
      left: (style) => style.mobile.left,
    },
  },
}));
