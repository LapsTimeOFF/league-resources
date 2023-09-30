import { Box, Divider, Typography } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import { JSONTree } from "react-json-tree";
import { useHotkeys } from "react-hotkeys-hook";
import Header from "@/components/wrappers/Header";
import DocumentSection from "@/components/documents/DocumentSection";
import Footer from "@/components/wrappers/Footer";
import useGrandsPrix from "@/hooks/useGrandsPrix";

const FiaDocuments = () => {
  const { grandsPrix, isLoading, error } = useGrandsPrix({
    documents: true,
  });
  const [debug, setDebug] = useState(false);
  useHotkeys("d", () => setDebug(!debug));

  return (
    <>
      <Head>
        <title>League Resources - Home</title>
      </Head>

      <Header />
      <Divider />

      <Box
        sx={{
          p: 4,
        }}
      >
        <Typography variant="h1" align="center">
          FIA Documents
        </Typography>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error</p>}
        {!grandsPrix && <p>No Data</p>}

        {debug && <JSONTree data={grandsPrix} />}

        {grandsPrix?.data
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((grandPrix) => {
            return (
              <DocumentSection key={grandPrix.id} GP={grandPrix.attributes} />
            );
          })}
      </Box>
      <Footer />
    </>
  );
};

export default FiaDocuments;
