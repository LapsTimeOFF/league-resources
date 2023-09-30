/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRouter } from "next/router";
import React from "react";
import { useCookies } from "react-cookie";

const Logout = () => {
  const [cookies, setCookie, removeCookie] = useCookies<string>([
    "token",
    "payload",
  ]);
  const router = useRouter();

  removeCookie("token");
  removeCookie("payload");

  if (typeof window !== "undefined") router.push("/");

  return <div />;
};

export default Logout;
