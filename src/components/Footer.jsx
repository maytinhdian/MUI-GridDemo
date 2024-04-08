import { Box, Paper, Typography } from "@mui/material";
import "../components/Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <Paper sx={{ bgcolor: "primary.main" }}>
        <Box sx={{width:'100vw'}}>
          <Typography variant="h6" component="div" width="100%">
            This is page footer
          </Typography>
        </Box>
      </Paper>
    </footer>
  );
}

export default Footer;
