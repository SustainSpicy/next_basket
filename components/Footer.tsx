"use client";
import { StyledHeading, StyledSpan1, StyledSpan3 } from "@/styles/styles";
import { Box, Button, Container, Grid, Stack, TextField } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Stack spacing={6} sx={{ paddingY: "2rem" }}>
      <Box>
        <Container>
          <Stack direction={"row"}>
            <Box>
              <StyledHeading variant="h6" noWrap sx={{}}>
                Bandage
              </StyledHeading>
            </Box>

            <Box
              sx={{
                flex: 1,
                display: "flex",
                gap: 1,
                alignItems: "center",
                justifyContent: "flex-end",
                color: "#23A6F0",
              }}
            >
              <FacebookIcon />
              <InstagramIcon />

              <TwitterIcon />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Container>
          <Grid container rowGap={2}>
            <Grid item xs={12} sm={2.3}>
              <Stack spacing={1}>
                <StyledSpan1 variant="body2">Company Info</StyledSpan1>
                <StyledSpan3 variant="body2">About Us</StyledSpan3>
                <StyledSpan3 variant="body2">Carrier</StyledSpan3>
                <StyledSpan3 variant="body2">We are hiring</StyledSpan3>
                <StyledSpan3 variant="body2">Blog</StyledSpan3>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={2.3}>
              <Stack spacing={1}>
                <StyledSpan1 variant="body2">Legal</StyledSpan1>
                <StyledSpan3 variant="body2">About Us</StyledSpan3>
                <StyledSpan3 variant="body2">Carrier</StyledSpan3>
                <StyledSpan3 variant="body2">We are hiring</StyledSpan3>
                <StyledSpan3 variant="body2">Blog</StyledSpan3>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={2.3}>
              <Stack spacing={1}>
                <StyledSpan1 variant="body2">Features</StyledSpan1>
                <StyledSpan3 variant="body2">Business Marketing</StyledSpan3>
                <StyledSpan3 variant="body2">User Analytic</StyledSpan3>
                <StyledSpan3 variant="body2">Live Chat</StyledSpan3>
                <StyledSpan3 variant="body2">Unlimited Support</StyledSpan3>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={2.3}>
              <Stack spacing={1}>
                <StyledSpan1 variant="body2">Resources</StyledSpan1>
                <StyledSpan3 variant="body2">IOS & Android</StyledSpan3>
                <StyledSpan3 variant="body2">Watch a Demo</StyledSpan3>
                <StyledSpan3 variant="body2">Customers</StyledSpan3>
                <StyledSpan3 variant="body2">Api</StyledSpan3>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={2.6}>
              <Stack spacing={1}>
                <StyledSpan1 variant="body2">Get In Touch </StyledSpan1>
                <Stack direction={"row"}>
                  <TextField
                    id="outlined-basic"
                    label="Your Email"
                    variant="outlined"
                  />
                  <button
                    style={{
                      //   width: "fit-content",
                      background: "#23A6F0",
                      color: "#fff",
                      padding: "8px",
                      borderTopRightRadius: "12px",
                      borderBottomRightRadius: "12px",
                    }}
                  >
                    Subscribe
                  </button>
                </Stack>

                <StyledSpan3 variant="body2">
                  Lore imp sum dolor Amit
                </StyledSpan3>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container>
          <StyledSpan3 variant="body2">
            Made With Love By Finland All Right Reserved{" "}
          </StyledSpan3>
        </Container>
      </Box>
    </Stack>
  );
};

export default Footer;
