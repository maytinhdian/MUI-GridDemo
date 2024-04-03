import { colors, createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary:{
        main:colors.amber[300],
    },
    secondary: {
      main: colors.lightBlue[700],
    },
  },
});
export default theme;
