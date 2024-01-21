"use client";
import {
  Box,
  Grid,
  Container,
  ImageList,
  ImageListItem,
  Typography,
  Stack,
} from "@mui/material";
import image1 from "../public/img/image1.png";
import image2 from "../public/img/image2.png";
import image3 from "../public/img/image3.png";
import image4 from "../public/img/image4.png";
import { srcset } from "@/constants/utils";

const Hero = () => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", paddingTop: "4rem" }}
    >
      <ImageList
        sx={{ maxWidth: "1000px", display: { xs: "none", sm: "grid" } }}
        variant="quilted"
        cols={7}
        rowHeight="auto"
        gap={4}
      >
        {imgData.map((item, index) => (
          <ImageListItem
            key={index}
            cols={item.cols || 1}
            rows={item.rows || 1}
            sx={{ position: "relative" }}
          >
            <Box
              sx={{ position: "absolute", top: "1rem", left: "1rem" }}
              color={"#252B42"}
            >
              <Typography
                sx={{
                  color: "#2DC071",
                  fontSize: "14px",
                  fontWeight: "700",
                  letterSpacing: "0.2px",
                }}
              >
                {item.quantity} Items
              </Typography>
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: "700",
                  letterSpacing: "0.2px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  letterSpacing: "0.2px",
                }}
              >
                Read More
              </Typography>
            </Box>
            <img
              {...srcset(item.img.src, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              // style={{ objectFit: "cover" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Stack
        direction={"column"}
        spacing={2}
        sx={{ display: { xs: "", sm: "none" } }}
      >
        {imgData.map((item, index) => (
          <Box
            key={index}
            sx={{ position: "relative", maxWidth: "300px", maxHeight: "300px" }}
          >
            <Box
              sx={{ position: "absolute", top: "1rem", left: "1rem" }}
              color={"#252B42"}
            >
              <Typography
                sx={{
                  color: "#2DC071",
                  fontSize: "14px",
                  fontWeight: "700",
                  letterSpacing: "0.2px",
                }}
              >
                {item.quantity} Items
              </Typography>
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: "700",
                  letterSpacing: "0.2px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  letterSpacing: "0.2px",
                }}
              >
                Read More
              </Typography>
            </Box>
            <img
              src={item.img.src}
              alt={item.title}
              loading="lazy"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default Hero;

const imgData = [
  {
    img: image1,
    title: "Bowl",
    rows: 4,
    cols: 3,
    quantity: 3,
  },
  {
    img: image2,
    title: "Vase",
    cols: 4,
    rows: 2,
    quantity: 6,
  },
  {
    img: image3,
    title: "Light",
    cols: 2,
    rows: 2,
    quantity: 2,
  },
  {
    img: image4,
    title: "Bowl",
    cols: 2,
    rows: 2,
    quantity: 5,
  },
];
