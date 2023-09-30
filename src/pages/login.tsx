import { Alert, Box, Divider, Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Login } from "@mui/icons-material";
import { useCookies } from "react-cookie";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import Header from "@/components/wrappers/Header";
import Footer from "@/components/wrappers/Footer";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [cookies, setCookies] = useCookies<string>(["token"]);
  const router = useRouter();

  useEffect(() => {
    if (cookies.token) {
      router.push("/");
    }
  }, [cookies.token, router]);

  const buttonClick = async () => {
    if (username === "") {
      setUsernameError("Username cannot be empty");
      return;
    }
    if (password === "") {
      setPasswordError("Password cannot be empty");
      return;
    }

    setDisabled(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASEURL}/api/v1/login`,
      {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
      }
    ).then((r) => r.json());

    console.log(res);

    if (res.error) {
      setUsernameError(
        res.error.message === "WRONG_INPUT" ? "Incorrect logins" : ""
      );
      setPasswordError(
        res.error.message === "WRONG_INPUT" ? "Incorrect logins" : ""
      );
      setDisabled(false);
      return;
    }

    if (res.data.token) {
      setCookies("token", res.data.token, {
        path: "/",
        maxAge: res.data.maxAge,
        sameSite: true,
      });
      setCookies("payload", JSON.stringify(jwt.decode(res.data.token)), {
        path: "/",
        maxAge: res.data.maxAge,
        sameSite: true,
      });
      // TODO: Very hacky way to wait for the cookies to be set
      await new Promise((r) => setTimeout(r, 500));
      router.push(((router.query.next as string) ?? "/") + "?loggedIn=true");
    }
  };

  return (
    <>
      <Head>
        <title>League Resources - Login</title>
      </Head>

      <Header />
      <Divider />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 5,
        }}
      >
        {router.query.next && (
          <Alert severity="error" sx={{ mb: 4 }}>
            You need to be logged in to access this page
          </Alert>
        )}
        <Stack spacing={2}>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            error={usernameError !== ""}
            helperText={usernameError}
            onChange={(e) => {
              setUsername(e.currentTarget.value);
              setUsernameError("");
            }}
            disabled={disabled}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            error={passwordError !== ""}
            helperText={passwordError}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
              setPasswordError("");
            }}
            disabled={disabled}
          />
          <LoadingButton
            variant="contained"
            color="info"
            startIcon={<Login />}
            onClick={buttonClick}
            loading={disabled}
          >
            Login
          </LoadingButton>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default LoginPage;
