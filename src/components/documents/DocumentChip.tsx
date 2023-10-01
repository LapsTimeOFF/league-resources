import React, { FC } from "react";
import { Chip, Grid } from "@mui/material";
import { Enum_Session_Type, Enum_Fiadocument_Type } from "@/types/types";

type Props = {
  documentType: Enum_Fiadocument_Type;
  sessionType: Enum_Session_Type | null;
};

const DocumentChip: FC<Props> = ({ documentType, sessionType }) => {
  return (
    <Grid container spacing={2}>
      {sessionType ? (
        <Grid item>
          {sessionType === Enum_Session_Type.Qualifying ? (
            <Chip variant="filled" label="Qualifying" color="secondary" />
          ) : sessionType === Enum_Session_Type.Session ? (
            <Chip variant="filled" label="Session" color="secondary" />
          ) : (
            <Chip variant="filled" label="Race" color="secondary" />
          )}
        </Grid>
      ) : null}
      <Grid item>
        {documentType === Enum_Fiadocument_Type.Info ? (
          <Chip variant="filled" label="Info" color="info" />
        ) : documentType ===
          Enum_Fiadocument_Type.InvestigationPenaltyGridDrop ? (
          <Chip variant="filled" label="Penalty: Grid Drop" color="error" />
        ) : documentType ===
          Enum_Fiadocument_Type.InvestigationNoFurtherAction ? (
          <Chip
            variant="filled"
            label="Investigation: No Further Action"
            color="success"
          />
        ) : documentType === Enum_Fiadocument_Type.InvestigationPenaltyTime ? (
          <Chip variant="filled" label="Penalty: Time" color="warning" />
        ) : documentType ===
          Enum_Fiadocument_Type.InvestigationRightOfReviewPenaltyGridDrop ? (
          <Chip
            variant="filled"
            label="Right of Review - Penalty: Grid Drop"
            color="error"
          />
        ) : documentType ===
          Enum_Fiadocument_Type.InvestigationRightOfReviewPenaltyNoFurtherAction ? (
          <Chip
            variant="filled"
            label="Right of Review - Investigation: No Further Action"
            color="success"
          />
        ) : documentType ===
          Enum_Fiadocument_Type.InvestigationRightOfReviewPenaltyTime ? (
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
