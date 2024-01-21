import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box } from "@mui/material";

const ReviewStar = () => {
  return (
    <>
      <StarIcon sx={{ fontSize: "16px", color: "#F3CD03" }} />
      <StarIcon sx={{ fontSize: "16px", color: "#F3CD03" }} />
      <StarIcon sx={{ fontSize: "16px", color: "#F3CD03" }} />
      <StarIcon sx={{ fontSize: "16px", color: "#F3CD03" }} />
      <StarBorderIcon sx={{ fontSize: "16px", color: "#F3CD03" }} />
    </>
  );
};
export default ReviewStar;
