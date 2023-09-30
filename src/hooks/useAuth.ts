import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { JWTPayload } from "@/types/JWT";

const useAuth = (): { token: string; payload: JWTPayload } => {
  const [{ token, payload }] = useCookies<string>(["token", "payload"]);
  const router = useRouter();

  console.log("useAuth called", token, payload);

  const isAuth = () => {
    console.log("isAuth called", token !== undefined);
    return token !== undefined;
  };

  if (typeof window !== "undefined" && !isAuth()) {
    console.log("isAuth is false redirecting");
    router.push(`/login?next=${router.pathname}`);
  }

  console.log("useAuth returning", token, payload);
  return {
    token,
    payload,
  };
};

export default useAuth;
