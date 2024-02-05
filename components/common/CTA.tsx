"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import background from "../../public/img/background.png";

const CTA = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px",
        display: "flex",
        alignItems: "center",
        padding: "5rem",
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Stack spacing={6} maxWidth={"550px"} alignItems={"center"}>
          <Typography
            variant="subtitle1"
            color={"#23A6F0"}
            textAlign={"center"}
          >
            Designing Better Experience
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{
              fontSize: "40px",
              fontWeight: "700",
              lineHeight: "32px",
              letterSpacing: "0.1px",
              color: "#252B42",
              textAlign: "center",
            }}
          >
            Problems trying to resolve the conflict between
          </Typography>
          <Typography
            variant="subtitle2"
            color={"#737373"}
            textAlign={"center"}
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </Typography>
          <Typography variant="body2" color={"#23856D"} textAlign={"center"}>
            $16.48
          </Typography>
          <button
            style={{
              width: "fit-content",
              background: "#23A6F0",
              color: "#fff",
              padding: "8px",
              borderRadius: "12px",
            }}
          >
            {" "}
            ADD YOUR CALL TO ACTION
          </button>
        </Stack>
      </Container>
    </Box>
  );
};

export default CTA;
