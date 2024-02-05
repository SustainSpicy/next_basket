"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { addToWishlist } from "@/redux/slices/wishlistSlice";
import { Product, ProductItemProps } from "@/constants/types";
import ReviewStar from "@/components/common/ReviewStar";
import ProductDetail from "@/components/product/ProductDetail";
import { ProductList, Sponsors } from "@/components";
import { useAlertContext } from "@/Provider/AlertContext";
import Breadcrumb from "@/components/common/Breadcrumb";

const Page = ({ params }: any) => {
  const dispatch = useDispatch();
  const { handleAlertOpen } = useAlertContext();
  const { id } = params;
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${params?.id}`
        );
        const data = await response.json();
        setSelectedProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) fetchProduct();
    // eslint-disable-next-line
  }, [id]);

  const settings = {
    appendDots: (dots: any) => (
      <div
        style={{
          display: "flex",
          height: "35px",
        }}
      >
        {dots}
      </div>
    ),
    customPaging: function (i: number) {
      return (
        <a>
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            src={selectedProduct?.images[i]}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  const handleAddToCart = (product: ProductItemProps) => {
    dispatch(addToCart(product));
    handleAlertOpen("Item added to Cart!");
  };

  const handleAddToWishlist = (product: ProductItemProps) => {
    dispatch(addToWishlist(product));
    handleAlertOpen("Item added to Wishlist");
  };
  return (
    <Container>
      <Stack
        spacing={6}
        sx={{
          background: "#FAFAFA",
          paddingX: "1rem",
          paddingY: "2rem",
          marginTop: "2px",
        }}
      >
        <Breadcrumb />

        <Grid
          container
          spacing={4}
          sx={{ minHeight: "300px", width: "100%", padding: 0 }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{ marginRight: { xs: "0rem", sm: "" } }}
          >
            <Slider {...settings}>
              {selectedProduct &&
                selectedProduct?.images.map((img) => {
                  return (
                    <Box key={img}>
                      <CardMedia
                        component="img"
                        image={img}
                        alt={"title"}
                        sx={{
                          minHeight: "250px",
                          maxHeight: "200px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  );
                })}
            </Slider>
          </Grid>
          <Grid item xs={12} md={6} sx={{ paddingTop: "1rem" }}>
            <Stack
              spacing={2}
              sx={{ paddingBottom: "5rem", borderBottom: "1px solid gray" }}
            >
              <Typography variant="h3" sx={{ fontSize: "18px" }}>
                {selectedProduct?.title}
              </Typography>

              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: "#737373",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <ReviewStar /> {selectedProduct?.rating} Reviews
              </Typography>

              <Typography
                variant="h3"
                sx={{ fontSize: "20px", fontWeight: "700" }}
              >
                $ {selectedProduct?.price}
              </Typography>
              <Typography
                component={"div"}
                variant="body2"
                color={"#737373"}
                fontSize={"14px"}
              >
                Availability :{" "}
                <Typography
                  component={"div"}
                  variant="body2"
                  sx={{ color: "#23A6F0", display: "inline" }}
                >
                  in Stock
                </Typography>
              </Typography>
            </Stack>
            <Stack spacing={2} direction="row" py={1}>
              <Box
                sx={{
                  background: "#23A6F0",
                  borderRadius: "500%",
                  width: "30px",
                  height: "30px",
                }}
              ></Box>
              <Box
                sx={{
                  background: "#2DC071",
                  borderRadius: "500%",
                  width: "30px",
                  height: "30px",
                }}
              ></Box>
              <Box
                sx={{
                  background: "#E77C40",
                  borderRadius: "500%",
                  width: "30px",
                  height: "30px",
                }}
              ></Box>
              <Box
                sx={{
                  background: "#252B42",
                  borderRadius: "500%",
                  width: "30px",
                  height: "30px",
                }}
              ></Box>
            </Stack>
            <Stack spacing={2} direction="row">
              <Button variant="outlined" sx={{ background: "#23A6F0" }}>
                Select Options
              </Button>
              <IconButton
                style={{
                  backgroundColor: "white",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                onClick={() =>
                  selectedProduct && handleAddToWishlist(selectedProduct)
                }
              >
                <FavoriteBorderIcon
                  style={{
                    color: "black",
                  }}
                />
              </IconButton>
              <IconButton
                style={{
                  backgroundColor: "white",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                onClick={() =>
                  selectedProduct && handleAddToCart(selectedProduct)
                }
              >
                <AddShoppingCartIcon style={{ color: "black" }} />
              </IconButton>
              <IconButton
                style={{
                  backgroundColor: "white",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <VisibilityIcon style={{ color: "black" }} />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <ProductDetail />
      <Stack
        sx={{ background: "#FAFAFA", paddingX: "1rem", paddingY: "2rem" }}
        spacing={2}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "30px",
            letterSpacing: "0.2px",
            color: "#252B42",
          }}
        >
          BESTSELLER PRODUCTS
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <ProductList noPagine />
      </Stack>
      <Sponsors />
    </Container>
  );
};

export default Page;
