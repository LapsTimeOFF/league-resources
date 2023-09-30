import { Divider } from "@mui/material";
import Head from "next/head";
import React from "react";
import Header from "@/components/wrappers/Header";
import Footer from "@/components/wrappers/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>League Resources - Home</title>
      </Head>

      <Header />
      <Divider />

      <Footer />
    </>
  );
};

export default Home;
