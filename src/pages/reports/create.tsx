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
import { JSONTree } from "react-json-tree";
import { useHotkeys } from "react-hotkeys-hook";
import Header from "@/components/wrappers/Header";
import Footer from "@/components/wrappers/Footer";
import useAuth from "@/hooks/useAuth";
import useGrandsPrix from "@/hooks/useGrandsPrix";
import useGrandPrix from "@/hooks/useGrandPrix";

const CreateReport = () => {
  const {} = useAuth();

  const [debug, setDebug] = useState<boolean>(false);
  const [type, setType] = useState<string | undefined>(undefined);
  const [GP, setGP] = useState<string | undefined>(undefined);
  const [session, setSession] = useState<string | undefined>(undefined);
  const [grandsPrix, isLoading] = useGrandsPrix({});
  const [grandsPrixSessions, isLoadingSessions] = useGrandPrix({
    sessions: true,
    id: GP ?? "1",
  });

  useHotkeys("d", () => setDebug(!debug));

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
        {debug && (
          <JSONTree
            data={{
              type,
              GP,
              session,
              grandsPrix,
              isLoading,
              grandsPrixSessions,
              isLoadingSessions,
              debug,
            }}
          />
        )}

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
              {grandsPrix.data
                .sort(
                  (a, b) =>
                    new Date(a.attributes?.startDate).getTime() -
                    new Date(b.attributes?.startDate).getTime()
                )
                .map((grandPrix, i) => {
                  return (
                    <MenuItem
                      key={grandPrix.attributes?.uid}
                      value={grandPrix.id!}
                    >
                      <Twemoji options={{ className: "twemoji" }}>
                        {grandPrix.attributes?.country_flag} {i + 1} -{" "}
                        {grandPrix.attributes?.name}
                      </Twemoji>
                    </MenuItem>
                  );
                })}
            </Select>
          ) : (
            <Skeleton variant="rectangular" />
          )}
        </FormControl>

        {GP && grandsPrixSessions && !isLoadingSessions ? (
          <FormControl fullWidth sx={{ my: 1 }}>
            <InputLabel>Session</InputLabel>
            <Select
              value={session}
              onChange={(e) => setSession(e.target.value)}
            >
              {grandsPrixSessions.data?.attributes?.sessions?.data
                .sort(
                  (a, b) =>
                    new Date(a.attributes?.startTime).getTime() -
                    new Date(b.attributes?.startTime).getTime()
                )
                .map((session) => {
                  return (
                    <MenuItem
                      key={session.attributes?.uid!}
                      value={session.id!}
                    >
                      {session.attributes?.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        ) : null}
      </Container>
    </>
  );
};

export default CreateReport;
