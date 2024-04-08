import { ChildCareSharp, LoginSharp } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

function NavBar() {
  return (
    <AppBar color="primary">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <ChildCareSharp />
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          MY DEMO APP
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Product</Button>
          <Button color="inherit">Customer</Button>
          <Button color="inherit">Invoice</Button>
          <Button color="inherit">Quotation</Button>
          <Button color="inherit">About Us</Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="login"
          >
            <LoginSharp />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
