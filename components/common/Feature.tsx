"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "../utils/Header";
import { StyledSpan3, StyledSpan4 } from "@/styles/styles";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import TimelineIcon from "@mui/icons-material/Timeline";
import image5 from "../../public/img/image5.png";
import image6 from "../../public/img/image6.png";
import image7 from "../../public/img/image7.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Feature = () => {
  return (
    <Container>
      <Header title="Practice Advice" heading="Featured Posts" />
      <Stack
        direction={{ xs: "column", sm: "row", md: "row" }}
        justifyContent={"space-around"}
        alignItems={{ xs: "center" }}
        gap={2}
        py={12}
      >
        {featureData.map((item, index) => {
          return <FeatureItem key={index} img={item.img} />;
        })}
      </Stack>
    </Container>
  );
};

export default Feature;

const FeatureItem = ({ img }: any) => {
  return (
    <Card sx={{ maxWidth: 255, position: "relative" }}>
      <Box
        sx={{
          background: "#E74040",
          position: "absolute",
          top: "10px",
          left: "10px",
          padding: "2px",
        }}
      >
        <Typography variant="body2" component="div" color={"#fff"}>
          New
        </Typography>
      </Box>
      <CardMedia sx={{ height: 140 }} image={img.src} title="green iguana" />
      <CardContent>
        <Stack flexDirection={"row"} gap={2}>
          <StyledSpan4 gutterBottom variant="body2" sx={{ color: "#8EC2F2" }}>
            Google
          </StyledSpan4>
          <StyledSpan4 gutterBottom variant="body2">
            Trending
          </StyledSpan4>
          <StyledSpan4 gutterBottom variant="body2">
            New
          </StyledSpan4>
        </Stack>
        <Typography gutterBottom variant="h5" component="div">
          Title
        </Typography>
        <StyledSpan3 gutterBottom variant="body2" sx={{ fontSize: "10px" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </StyledSpan3>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            sx={{
              fontSize: "12px",
              fonStyle: "normal",
              fontWeight: 400,
              letterSpacing: "0.2px",
              color: "#8EC2F2",
            }}
          >
            <AccessAlarmIcon fontSize="small" style={{ color: "#23A6F0" }} /> 22
            April 2021
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            sx={{
              fontSize: "12px",
              fonStyle: "normal",
              fontWeight: 400,
              letterSpacing: "0.2px",
              color: "#8EC2F2",
            }}
          >
            <TimelineIcon fontSize="small" style={{ color: "#23856D" }} /> 10
            comments
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ fontWeight: "700", color: "#737373" }}>
          Learn More{" "}
          <ArrowForwardIosIcon fontSize="small" style={{ color: "#23A6F0" }} />
        </Button>
      </CardActions>
    </Card>
  );
};

const featureData = [
  {
    img: image5,
  },
  {
    img: image6,
  },
  {
    img: image7,
  },
];
