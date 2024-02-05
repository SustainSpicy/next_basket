"use client";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import frame from "../../public/img/frame.png";
import user from "../../public/img/user.jpg";
import React from "react";
import ReviewStar from "./ReviewStar";

const Feedback = () => {
  return (
    <Container>
      <Grid container py={8}>
        <Grid item xs={12} sm={6}>
          <Stack alignItems={"center"} spacing={4}>
            <Typography variant="h5">What they say about us</Typography>
            <Box>
              <Image src={user} alt="user image" />
              <ReviewStar />
            </Box>
            <Stack spacing={2} maxWidth={"300px"}>
              <Typography
                variant="subtitle2"
                color={"#737373"}
                textAlign={"center"}
              >
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </Typography>
              <Typography
                variant="subtitle1"
                color={"#23A6F0"}
                textAlign={"center"}
              >
                Regina Miles
              </Typography>
              <Typography variant="subtitle1" textAlign={"center"}>
                Designer
              </Typography>
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
