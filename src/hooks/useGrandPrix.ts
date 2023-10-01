import useSWR from "swr";
import { GrandPrixEntityResponse } from "@/types/types";

type UseGrandsPrix = {
  documents?: boolean;
  sessions?: boolean;
  id: string;
};

const useGrandPrix = ({
  documents,
  sessions,
  id,
}: UseGrandsPrix): [GrandPrixEntityResponse, boolean, any] => {
  const { data, isLoading, error } = useSWR<GrandPrixEntityResponse>(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/api/v1/strapi/grand-prix/${id}?${
      documents ? "documents=true" : ""
    }&${sessions ? "sessions=true" : ""}`,
    (url: string) => fetch(url).then((res) => res.json())
  );

  return [data!, isLoading, error];
};

export default useGrandPrix;
