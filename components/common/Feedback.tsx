"use client";
import {
  Box,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import frame from "../../public/img/frame.png";
import user from "../../public/img/user.jpg";
import React from "react";
import { StyledHeading, StyledSpan1, StyledSpan3 } from "@/styles/styles";
import ReviewStar from "../utils/ReviewStar";

const Feedback = () => {
  return (
    <Container>
      <Grid container py={8}>
        <Grid item xs={12} sm={6}>
          <Stack alignItems={"center"} spacing={4}>
            <StyledHeading variant="h6">What they say about us</StyledHeading>
            <Box>
              <Image src={user} alt="user image" />
              <ReviewStar />
            </Box>
            <Stack spacing={2} maxWidth={"300px"}>
              <StyledSpan3 variant="body2" textAlign={"center"}>
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </StyledSpan3>
              <StyledSpan1
                variant="body2"
                color={"#23A6F0"}
                textAlign={"center"}
              >
                Regina Miles
              </StyledSpan1>
              <StyledSpan1 variant="body2" textAlign={"center"}>
                Designer
              </StyledSpan1>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image src={frame} alt="grid image" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Feedback;
