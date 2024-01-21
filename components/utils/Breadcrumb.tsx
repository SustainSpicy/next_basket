import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Breadcrumb = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      // onClick={handleClick}
    >
      Home
    </Link>,

    <Typography key="3" color="text.primary">
      Product
    </Typography>,
  ];
  return (
    <Box>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
