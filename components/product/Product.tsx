"use client";
import { Box, Container } from "@mui/material";
import Header from "../utils/Header";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <Box sx={{ paddingTop: "4rem" }}>
      <Container>
        <Header
          title="Featured Products"
          heading="BESTSELLER PRODUCTS"
          desc="Problems trying to resolve the conflict between"
        ></Header>
        <ProductList noPagine={false} />
      </Container>
    </Box>
  );
};

export default Products;
