import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";

type Props = {
  icon?: JSX.Element;
  path: string;
  disabled?: boolean;
};

const DrawerItem: FC<PropsWithChildren<Props>> = ({
  path,
  icon,
  children,
  disabled,
}) => {
  return (
    <ListItem disablePadding>
      <ListItemButton href={path} LinkComponent={Link} disabled={disabled}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : undefined}
        <ListItemText primary={children} />
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerItem;
