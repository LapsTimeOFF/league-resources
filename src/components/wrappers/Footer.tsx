import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: "0px",
        width: "100%",
        height: "80px",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <p>
        <b>League Resources</b> by LapsTime and Joost
        <br />© Licensed under the GPL-v3.0 License
      </p>
    </footer>
  );
};

export default Footer;
