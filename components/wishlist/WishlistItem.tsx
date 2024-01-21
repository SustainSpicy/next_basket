import { ProductItemProps } from "@/constants/types";
import { AddIcCallOutlined, RemoveCircleOutline } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromWishlist } from "@/redux/slices/wishlistSlice";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
    objectFit: "contain",
  },
}));

interface CartProps extends ProductItemProps {
  handleRemoveFromWishlist: (item: number) => void;
}
const WishlistItem = ({
  thumbnail,
  title,
  price,
  id,
  handleRemoveFromWishlist,
}: CartProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardMedia
        component="img"
        className={classes.cover}
        image={thumbnail}
        title="Live from space album cover"
      />
      <CardContent className={classes.content}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <Grid
          container
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Stack
            width={"100%"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Typography
              variant="body1"
              component="div"
              style={{ fontWeight: "bold" }}
            >
              Price
            </Typography>

            <Typography variant="h6" component="div" color="secondary">
              ${price}
            </Typography>
          </Stack>
          <Stack
            width={"100%"}
            direction={"row"}
            // gap={2}
            justifyContent={"flex-end"}
          >
            <IconButton onClick={() => handleRemoveFromWishlist(id)}>
              <DeleteIcon fontSize="small" sx={{ color: "red" }} />
            </IconButton>
          </Stack>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WishlistItem;
