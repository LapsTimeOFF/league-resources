import React, { Fragment, useState } from "react";
import SideBarDrawer from "@/components/drawer/Drawer";

const useDrawer = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

  const element = (
    <Fragment>
      <SideBarDrawer open={open} onClose={onClose} />
    </Fragment>
  );

  return {
    element,
    toggleDrawer,
  };
};

export default useDrawer;
