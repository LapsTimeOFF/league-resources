import {
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
} from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import Twemoji from "react-twemoji";
import Header from "@/components/wrappers/Header";
import Footer from "@/components/wrappers/Footer";
import useAuth from "@/hooks/useAuth";
import useGrandsPrix from "@/hooks/useGrandsPrix";

const CreateReport = () => {
  const {} = useAuth();
  const { grandsPrix, isLoading } = useGrandsPrix({});
  const [type, setType] = useState<string | null>(null);
  const [GP, setGP] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>League Resources - Create Report</title>
      </Head>

      <Header />
      <Divider />

      <Footer />

      <Container
        sx={{
          mt: 2,
        }}
      >
        <FormControl fullWidth sx={{ my: 1 }}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value={"report"}>Report</MenuItem>
            <MenuItem value={"rightofreview"}>Request Right of Review</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ my: 1 }}>
          <InputLabel>Grand Prix</InputLabel>
          {!isLoading && grandsPrix ? (
            <Select value={GP} onChange={(e) => setGP(e.target.value)}>
              {grandsPrix.data.map((grandPrix) => {
                return (
                  <MenuItem
                    key={grandPrix.attributes.uid}
                    value={grandPrix.attributes.uid}
                  >
                    <Twemoji options={{ className: "twemoji" }}>
                      {grandPrix.attributes.country_flag}{" "}
                      {grandPrix.attributes.name}
                    </Twemoji>
                  </MenuItem>
                );
              })}
            </Select>
          ) : (
            <Skeleton variant="rectangular" />
          )}
        </FormControl>
      </Container>
    </>
  );
};

export default CreateReport;
