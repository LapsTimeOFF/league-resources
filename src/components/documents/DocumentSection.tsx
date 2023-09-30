import React, { FC, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  IconButtonProps,
  Typography,
  styled,
} from "@mui/material";
import Twemoji from "react-twemoji";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactMarkdown from "react-markdown";
import DocumentCard from "./DocumentCard";
import { PurpleAttributes } from "@/types/GrandPrix";

type Props = {
  GP: PurpleAttributes;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const DocumentSection: FC<Props> = ({ GP }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  console.log(GP);

  return (
    <Card
      sx={{
        my: 2,
      }}
    >
      <CardContent>
        <Typography variant="h3">
          <Twemoji options={{ className: "twemoji" }}>
            {GP.country_flag} {GP.name}
          </Twemoji>
        </Typography>
        {/* On the right centered vertically on the card */}
      </CardContent>
      <CardActions>
        {GP.info && <ReactMarkdown>{GP.info}</ReactMarkdown>}
        <ExpandMore
          expand={expanded}
          onClick={toggleExpanded}
          sx={{
            right: 0,
          }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container spacing={2}>
            {GP.fia_documents.data
              .sort(
                (a, b) =>
                  new Date(a.attributes.upload_date).getTime() -
                  new Date(b.attributes.upload_date).getTime()
              )
              .map((document) => {
                return (
                  <DocumentCard
                    attributes={document.attributes}
                    key={document.attributes.uid}
                  />
                );
              })}
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default DocumentSection;
