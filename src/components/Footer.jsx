import { Paper, Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Paper sx={{ bgcolor: 'secondary.main'}}>
        <Typography variant="h6" component="div" >
          This is page footer
        </Typography>
      </Paper>
     </footer>
  );
}

export default Footer;
