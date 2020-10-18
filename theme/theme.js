const breakpoints = ["40em", "52em", "64em"];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];

export default {
  colors: {
    primary: "#ff0000",
  },
  variants: {
    container: {
      maxWidth: 1260,
      width: "100%",
      mx: "auto",
      px: 30,
    },
  },
  breakpoints,
};
