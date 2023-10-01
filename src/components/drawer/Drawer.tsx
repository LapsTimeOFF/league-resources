import { Box, Divider, Drawer, List, styled } from "@mui/material";
import React, { FC } from "react";
import {
  Home,
  Article,
  Tv,
  Login,
  Logout,
  PrivacyTip,
  Rule,
} from "@mui/icons-material";
import { useCookies } from "react-cookie";
import DrawerItem from "./DrawerItem";

type Props = {
  open: boolean;
  onClose: () => void;
};

const Separator = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const SideBarDrawer: FC<Props> = ({ open, onClose }) => {
  const [cookies] = useCookies<string>(["token", "payload"]);

  return (
    <Box>
      <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        sx={{
          width: 250,
          height: "100%",
        }}
      >
        <List>
          <DrawerItem path="/" icon={<Home />}>
            Home
          </DrawerItem>
          <DrawerItem path="/fia-documents" icon={<Article />}>
            FIA Documents
          </DrawerItem>

          <Separator />

          <DrawerItem
            path="https://rules.f1refugeesleague.tech"
            icon={<Rule />}
          >
            Rules
          </DrawerItem>
          <DrawerItem
            path="https://streaming.f1refugeesleague.tech"
            icon={<Tv />}
          >
            Streaming Platform
          </DrawerItem>

          {/* <Separator /> */}

          {/* <DrawerItem path="/reports/create" icon={<Report />}>
            Create a report
          </DrawerItem> */}

          <Separator />

          {!cookies.token ? (
            <DrawerItem path="/login" icon={<Login />}>
              Login
            </DrawerItem>
          ) : (
            <>
              <DrawerItem path="/login" disabled>
                Logged in as {cookies.payload?.display_name}
              </DrawerItem>
              <DrawerItem path="/logout" icon={<Logout />}>
                Logout
              </DrawerItem>
            </>
          )}

          <Separator />

          <DrawerItem path="/docs/privacy" icon={<PrivacyTip />}>
            Privacy
          </DrawerItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBarDrawer;
