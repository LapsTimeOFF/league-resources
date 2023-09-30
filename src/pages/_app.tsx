import "@/styles/globals.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import React from "react";
import { IntlProvider } from "react-intl";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <IntlProvider locale="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
