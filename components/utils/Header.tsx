import { Box, Typography } from "@mui/material";
import React from "react";

interface Header {
  title: string;
  heading: string;
  desc?: string;
}
const Header: React.FC<Header> = ({ title, heading, desc }) => {
  return (
    <Box textAlign={"center"}>
      <Typography
        variant="h2"
        sx={{
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "30px",
          letterSpacing: "0.2px",
          color: "#252B42",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "32px",
          letterSpacing: "0.1px",
          color: "#252B42",
        }}
      >
        {heading}
      </Typography>
      <Typography variant="body2" fontSize={16} color={"#252B42"}>
        {desc}
      </Typography>
    </Box>
  );
};

export default Header;
