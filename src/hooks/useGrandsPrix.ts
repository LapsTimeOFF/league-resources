import useSWR from "swr";
import { GrandPrixResponse } from "@/types/GrandPrix";

type UseGrandsPrix = {
  documents?: boolean;
  sessions?: boolean;
};

const useGrandsPrix = ({ documents, sessions }: UseGrandsPrix) => {
  const { data, isLoading, error } = useSWR<GrandPrixResponse>(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/api/v1/strapi/grands-prix?${
      documents ? "documents=true" : ""
    }&${sessions ? "sessions=true" : ""}`,
    (url: string) => fetch(url).then((res) => res.json())
  );

  return {
    grandsPrix: data?.data.grandsPrix,
    isLoading,
    error,
  };
};

export default useGrandsPrix;
