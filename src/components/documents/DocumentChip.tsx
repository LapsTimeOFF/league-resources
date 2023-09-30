import React, { FC } from "react";
import { Chip, Grid } from "@mui/material";
import { FiaDocumentType, SessionType } from "@/types/GrandPrix";

type Props = {
  documentType: FiaDocumentType;
  sessionType: SessionType | null;
};

const DocumentChip: FC<Props> = ({ documentType, sessionType }) => {
  return (
    <Grid container spacing={2}>
      {sessionType ? (
        <Grid item>
          {sessionType === SessionType.Qualifying ? (
            <Chip variant="filled" label="Qualifying" color="secondary" />
          ) : sessionType === SessionType.Session ? (
            <Chip variant="filled" label="Session" color="secondary" />
          ) : (
            <Chip variant="filled" label="Race" color="secondary" />
          )}
        </Grid>
      ) : null}
      <Grid item>
        {documentType === FiaDocumentType.Info ? (
          <Chip variant="filled" label="Info" color="info" />
        ) : documentType === FiaDocumentType.InvestigationPenaltyGridDrop ? (
          <Chip variant="filled" label="Penalty: Grid Drop" color="error" />
        ) : documentType === FiaDocumentType.InvestigationPenaltyNFA ? (
          <Chip
            variant="filled"
            label="Investigation: No Further Action"
            color="success"
          />
        ) : documentType === FiaDocumentType.InvestigationPenaltyTime ? (
          <Chip variant="filled" label="Penalty: Time" color="warning" />
        ) : documentType ===
          FiaDocumentType.InvestigationRightOfReviewPenaltyGridDrop ? (
          <Chip
            variant="filled"
            label="Right of Review - Penalty: Grid Drop"
            color="error"
          />
        ) : documentType ===
          FiaDocumentType.InvestigationRightOfReviewPenaltyNFA ? (
          <Chip
            variant="filled"
            label="Right of Review - Investigation: No Further Action"
            color="success"
          />
        ) : documentType ===
          FiaDocumentType.InvestigationRightOfReviewPenaltyTime ? (
          <Chip
            variant="filled"
            label="Right of Review - Penalty: Time"
            color="warning"
          />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default DocumentChip;
