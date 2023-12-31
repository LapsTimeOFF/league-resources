import useSWR from "swr";
import { GrandPrixEntityResponseCollection } from "@/types/types";

type UseGrandsPrix = {
  documents?: boolean;
  sessions?: boolean;
};

const useGrandsPrix = ({
  documents,
  sessions,
}: UseGrandsPrix): [GrandPrixEntityResponseCollection, boolean, any] => {
  const { data, isLoading, error } = useSWR<GrandPrixEntityResponseCollection>(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/api/v1/strapi/grands-prix?${
      documents ? "documents=true" : ""
    }&${sessions ? "sessions=true" : ""}`,
    (url: string) => fetch(url).then((res) => res.json())
  );

  return [data!, isLoading, error];
};

export default useGrandsPrix;
