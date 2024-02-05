"use client";
import {
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Stack spacing={6} sx={{ paddingY: "2rem" }}>
      <Box>
        <Container>
          <Stack direction={"row"}>
            <Box>
              <Typography variant="h2" noWrap sx={{}}>
                Bandage
              </Typography>
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
              <Stack>
                <Typography variant="h4">Company Info</Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  About Us
                </Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  Carrier
                </Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  We are hiring
                </Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  Blog
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={2.3}>
              <Stack>
                <Typography variant="h4">Legal</Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  About Us
                </Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  Blog
                </Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  Carrier
                </Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  We are hiring
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={2.3}>
              <Stack>
                <Typography variant="h4">Features</Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  Business Marketing
                </Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  User Analytic
                </Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  Live Chat
                </Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  Unlimited Support
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={2.3}>
              <Stack>
                <Typography variant="h4">Features</Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  Resources
                </Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  IOS & Android
                </Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  Watch a Demo
                </Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  Unlimited Support
                </Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  Customers
                </Typography>
                <Typography variant="subtitle2" color={"#737373"}>
                  Api
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={2.6}>
              <Stack spacing={1}>
                <Typography variant="h4">Get In Touch </Typography>
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
                <Typography variant="subtitle2" color={"#737373"}>
                  Lore imp sum dolor Amit
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container>
          <Typography variant="subtitle2" color={"#737373"}>
            Made With Love By Finland All Right Reserved{" "}
          </Typography>
        </Container>
      </Box>
    </Stack>
  );
};

export default Footer;
