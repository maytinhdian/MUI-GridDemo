import { Container } from "@mui/material";

import "../layouts/guestLayout.css";
import { Outlet } from "react-router-dom";

function guestLayout() {
  return (
    <Container maxWidth="sm">
      <h1>Guest layout..,</h1>
      <Outlet/>
    </Container>
  );
}

export default guestLayout;
