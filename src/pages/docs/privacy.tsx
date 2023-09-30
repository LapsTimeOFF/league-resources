import { Container, Divider, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import Header from "@/components/wrappers/Header";
import Footer from "@/components/wrappers/Footer";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>League Resources - Privacy</title>
      </Head>

      <Header />
      <Divider />

      <Container sx={{ p: 2 }}>
        <Typography variant="h3" align="center">
          <b>Privacy Policy</b>
        </Typography>

        <Typography variant="h4" align="center">
          <b>What data do we transmit?</b>
        </Typography>

        <Typography variant="body1" align="center" sx={{ my: 2 }}>
          We transmit your username and password to the API to authenticate you.
          <br />
          All of your trafic goes through a Secured Socket Layer (SSL)
          connection.
          <br />
          All of your trafic also goes through our API server, which is hosted
          by Cloudflare.
        </Typography>

        <Typography variant="h4" align="center">
          <b>What data do we store?</b>
        </Typography>

        <Typography variant="h5" align="center">
          <b>Server Side</b>
        </Typography>

        <Typography variant="body1" align="center" sx={{ my: 2 }}>
          We are very transparent about what data we store.
          <br />
          We store nothing.
          <br />
          Like Carlos Sainz and plan B, it's forgotten.
        </Typography>

        <Typography variant="h5" align="center">
          <b>Client Side (on your browser)</b>
        </Typography>

        <Typography variant="body1" align="center" sx={{ my: 2 }}>
          We store your token and payload in cookies.
          <br />
          The token is used to authenticate you on the API.
          <br />
          The payload is used to display your username on the navbar.
          <br />
          The token and payload are stored for 3 days.
        </Typography>

        <Typography variant="h4" align="center">
          <b>What data do we share?</b>
        </Typography>

        <Typography variant="body1" align="center" sx={{ my: 2 }}>
          We share nothing.
          <br />
          We don't sell your data.
          <br />
          We don't share your data with third parties.
          <br />
          We don't even share your data with ourselves.
          <br />
          We were really inspired by Ferrari when we wrote this.
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default Privacy;
