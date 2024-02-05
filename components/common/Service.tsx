"use client";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "./Header";
import reader from "../../public/img/reader.png";
import book from "../../public/img/book.png";
import growth from "../../public/img/growth.png";

const Service = () => {
  return (
    <Container>
      <Header
        title="Featured Products"
        heading="THE BEST SERVICES"
        desc="Problems trying to resolve the conflict between"
      />
      <Stack
        direction={{ xs: "column", sm: "row", md: "row" }}
        justifyContent={"space-around"}
        alignItems={{ xs: "center" }}
        py={12}
      >
        {ServiceObj.map((item, index) => {
          return <ServiceItem key={index} {...item} />;
        })}
      </Stack>
    </Container>
  );
};

export default Service;

const ServiceItem = ({ img, title, desc }: any) => {
  return (
    <Card sx={{ maxWidth: "200px" }} elevation={0}>
      <CardActionArea disableRipple>
        <CardMedia
          component="img"
          image={img.src}
          alt={title}
          sx={{ maxHeight: "100px", objectFit: "scale-down" }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            gutterBottom
            component="div"
            variant="h5"
            fontSize={16}
            sx={{
              display: "flex",
              fontWeight: 700,
              color: "#252B42",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            component="div"
            variant="body2"
            fontSize={12}
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const ServiceObj = [
  {
    img: reader,
    title: "Easy Wins",
    desc: "Get your best looking smile now!",
  },
  {
    img: book,
    title: "Concrete",
    desc: "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    img: growth,
    title: "Hack Growth",
    desc: "Overcame any hurdle or any other problem.",
  },
];
