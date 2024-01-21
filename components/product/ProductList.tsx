"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Header from "../utils/Header";
import Image from "next/image";
import Link from "next/link";
import { ProductItemProps } from "@/constants/types";
import ProductItem from "./ProductItem";

const ProductList = ({ noPagine }: { noPagine: boolean }) => {
  const [productList, setProductList] = useState([]);
  const [limit, setLimit] = useState(10);
  const [listSize, setListSize] = useState(0);
  const showButtonRef = useRef();

  const fetchPosts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}`
    );
    const data = await response.json();
    setProductList(data.products);
    setListSize(data.total);
  };

  useEffect(() => {
    fetchPosts();
  }, [limit]);

  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + 5);
  };

  return (
    <>
      <Grid container rowGap={4} mt={4}>
        {productList.map((item: any, index) => {
          return <ProductItem key={index} {...item} />;
        })}
      </Grid>
      {!noPagine && (
        <Box my={4} sx={{ display: "flex" }} justifyContent={"center"}>
          {limit <= listSize && (
            <Button variant="outlined" onClick={handleShowMore}>
              LOAD MORE PRODUCTS
            </Button>
          )}
        </Box>
      )}
    </>
  );
};

export default ProductList;
