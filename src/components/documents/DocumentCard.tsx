import React, { FC } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import DateFormat from "../DateFormat";
import DocumentChip from "./DocumentChip";
import { Enum_Session_Type, FiaDocument } from "@/types/types";

type Props = {
  attributes: FiaDocument;
};

const DocumentCard: FC<Props> = ({ attributes }) => {
  const documents = attributes.document?.data;

  const imageFile = documents?.find(
    (document) => document.attributes?.ext === ".png"
  );
  const pdfFile = documents?.find(
    (document) => document.attributes?.ext === ".pdf"
  );

  return (
    <Grid item xs={4} md={4}>
      <Card elevation={8}>
        <CardActionArea
          LinkComponent={Link}
          href={
            (process.env.NEXT_PUBLIC_API_BASEURL ?? "") +
            (pdfFile?.attributes?.url ?? "")
          }
        >
          {imageFile && (
            <CardMedia
              sx={{ height: 140 }}
              image={
                process.env.NEXT_PUBLIC_API_BASEURL! + imageFile.attributes?.url
              }
              title={imageFile.attributes?.name}
            />
          )}
          <CardContent>
            <Typography variant={"h4"}>{attributes.title}</Typography>
            <Typography>
              <DateFormat date={attributes.upload_date} />
            </Typography>
            <DocumentChip
              documentType={attributes.type!}
              sessionType={
                attributes.session?.data
                  ? (attributes.session.data.attributes
                      ?.type as Enum_Session_Type)
                  : null
              }
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default DocumentCard;
