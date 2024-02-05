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
      <Typography variant="h2" color="customGray">
        {title}
      </Typography>
      <Typography variant="h3">{heading}</Typography>
      <Typography variant="subtitle2" fontSize={16} color={"#252B42"}>
        {desc}
      </Typography>
    </Box>
  );
};

export default Header;
