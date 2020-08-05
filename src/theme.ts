import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import { green } from "@material-ui/core/colors";

// Create a theme instance.
export const lightTheme = createMuiTheme({
  palette: {
    primary: green,
    secondary: green,
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: green,
    secondary: green,
    error: {
      main: red.A400,
    },
  },
});
