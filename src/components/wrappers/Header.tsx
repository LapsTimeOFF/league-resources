import {
  Alert,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import useDrawer from "@/hooks/useDrawer";

const Header = () => {
  const smallScreen = useMediaQuery("(max-width:900px)");
  const { element, toggleDrawer } = useDrawer();
  const { query } = useRouter();

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "#121212",
          zIndex: 100,
          mb: 4,
          mt: smallScreen ? undefined : 2,
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            left: "0.5em",
          }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Image
          src="/logo.png"
          alt="League Resources"
          width="100"
          height="100"
          style={{
            marginLeft: 15,
            marginTop: 15,
            borderRadius: 30,
            marginBottom: 15,
          }}
        />
        <Typography
          variant={smallScreen ? "h6" : "h2"}
          sx={{
            ml: 2,
          }}
        >
          <b>League Resources</b>
        </Typography>
        {element}
      </Box>
      {query.loggedIn ? (
        <Alert severity="success" variant="outlined" sx={{ mx: 2, mb: 2 }}>
          You have been successfully logged in!
        </Alert>
      ) : null}
    </>
  );
};

export default Header;
